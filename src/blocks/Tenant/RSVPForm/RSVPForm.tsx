'use client'

import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Form, FormLabel } from '@/components/ui/form'
import { RSVPFormBlock } from '@/payload-types'
import { Heart, Minus, Plus, Trash2, User, Users } from 'lucide-react'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { submitRSVP } from './actions'
import { RSVPFields } from './RSVPFields'
import { RSVPFormBuilder } from './RSVPFormBuilder'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  people: z.array(z.any()).min(1).max(5),
})

type FormValues = z.infer<typeof formSchema>

export const RSVPForm = ({ title, description, fields: questions }: RSVPFormBlock) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      people: [RSVPFormBuilder(questions)],
    },
  })

  const { fields, append, remove } = useFieldArray({
    name: 'people',
    control: form.control,
  })

  const updateGuestCount = (newCount: number) => {
    const currentCount = fields.length
    const count = Math.max(1, Math.min(5, newCount))

    if (count > currentCount) {
      // Add new guests
      for (let i = 0; i < count - currentCount; i++) {
        append({ firstName: '', lastName: '', email: '', phone: '', isAttending: false })
      }
    } else if (count < currentCount) {
      // Remove extra guests
      for (let i = currentCount - 1; i >= count; i--) {
        remove(i)
      }
    }
  }

  async function onSubmit(data: FormValues) {
    console.log('submitData', data)
    setIsSubmitting(true)
    const toastId = toast.loading('Skickar...')
    try {
      // await submitRSVP(data)
      toast.success('Tack för ditt svar!', { id: toastId })
      form.reset()
    } catch (error) {
      toast.error('Något gick fel. Försök igen senare.', { id: toastId })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center">
          <Heart className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">{title || 'Wedding RSVP'}</h2>
          {description && <RichText data={description} className="mt-2 text-gray-600" />}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-8 pb-8 space-y-6">
            <div className="space-y-8">
              {/* Guest Count */}
              <div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => updateGuestCount(fields.length - 1)}
                    disabled={fields.length <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="text-lg font-medium">{fields.length}</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => updateGuestCount(fields.length + 1)}
                    disabled={fields.length >= 5}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Guest Forms */}
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-6 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-4 relative">
                    <User className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-medium">Person {index + 1}</h3>
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        className="absolute right-0"
                        size="icon"
                        onClick={() => remove(index)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions?.map((question, i) => {
                      const Field = RSVPFields[question.type as keyof typeof RSVPFields]
                      if (!Field || !question.id) return null
                      return (
                        <Field
                          key={question.id ?? `${i}field`}
                          {...question}
                          type="text"
                          name={`people.${index}.${question.id}`}
                          control={form.control}
                          register={form.register}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Skickar...' : 'Skicka'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
