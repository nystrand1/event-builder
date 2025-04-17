'use client'

import { useGuest } from '@/app/(frontend)/event/[slug]/providers/GuestProvider'
import { submitGuestRSVP } from '@/blocks/Tenant/RSVPForm/actions'
import { GuestRSVPFormBuilder, slugify } from '@/blocks/Tenant/RSVPForm/GuestRSVPFormBuilder'
import { RSVPFields } from '@/blocks/Tenant/RSVPForm/RSVPFields'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Guest, RSVPFormBlock } from '@/payload-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Heart, User } from 'lucide-react'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export const GuestRSVPForm = ({
  guestFormTitle,
  description,
  fields: questions,
}: RSVPFormBlock) => {
  const { guest } = useGuest()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Build answers schema from questions dynamically
  const buildAnswersSchema = (fields: RSVPFormBlock['fields']) => {
    const shape: Record<string, z.ZodTypeAny> = {}
    fields?.forEach((field) => {
      const key = slugify(field.label)
      shape[key] = field.required
        ? z.string().nonempty('This field is required')
        : z.string().optional()
    })
    return z.object(shape)
  }

  // Use dynamic schema inside the component
  const formSchema = z.object({
    people: z.array(
      z.object({
        guestId: z.string(),
        name: z.string(),
        answers: buildAnswersSchema(questions),
      }),
    ),
  })

  type FormValues = z.infer<typeof formSchema>

  const allGuests = [guest, ...(guest?.relatedGuests ?? [])].filter(
    (g: Guest) => !g.excludedFromRsvp,
  )
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      people: allGuests.map((g: Guest) => ({
        guestId: g.guestId ?? '',
        name: g.name ?? '',
        answers: GuestRSVPFormBuilder(questions, g),
      })),
    },
  })

  const { fields } = useFieldArray({
    name: 'people',
    control: form.control,
  })
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    const toastId = toast.loading('Skickar...')
    try {
      await submitGuestRSVP(data)
      toast.success('Tack för ditt svar!', { id: toastId })
    } catch (error) {
      toast.error('Något gick fel. Försök igen senare.', { id: toastId })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!guest) return null

  const interpolateGuestName = (text: string, guestName: string) => {
    return text.replace(/{{\s*guestName\s*}}/g, guestName)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-2 md:px-8 pt-8 pb-6 text-center">
          <Heart className="mx-auto h-12 w-12 text-accent" />
          {guestFormTitle && guest.name && (
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              {interpolateGuestName(guestFormTitle, guest.name)}
            </h2>
          )}
          {description && <RichText data={description} className="mt-2 text-gray-600" />}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-2 md:px-8 pb-8 space-y-6">
            <div className="space-y-8">
              {/* Guest Forms */}
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-6 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-4 relative">
                    <User className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-medium">{field.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions?.map((question, i) => {
                      const Field = RSVPFields[question.type as keyof typeof RSVPFields]
                      if (!Field || !question.id) return null
                      const fieldKey = slugify(question.label)
                      return (
                        <Field
                          key={question.id ?? `${i}field`}
                          {...question}
                          type="text"
                          defaultValue={field[fieldKey]}
                          name={`people.${index}.answers.${fieldKey}`}
                          errors={form.formState.errors}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="w-full bg-accent hover:bg-accent/90"
            >
              {isSubmitting ? 'Skickar...' : 'Skicka'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
