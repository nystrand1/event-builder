'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RSVPFormBlock } from '@/payload-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, Heart, Mail, Minus, Phone, Plus, Trash, Trash2, User, Users } from 'lucide-react'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { submitRSVP } from './actions'
import toast from 'react-hot-toast'

const personSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  isAttending: z.boolean().default(false),
})

const formSchema = z.object({
  people: z.array(personSchema).min(1).max(5),
})

type FormValues = z.infer<typeof formSchema>

export const RSVPForm = ({ title }: RSVPFormBlock) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      people: [{ firstName: '', lastName: '', email: '', phone: '', isAttending: false }],
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
    setIsSubmitting(true)
    try {
      await submitRSVP(data)
      toast({
        title: 'RSVP Submitted',
        description: 'Thank you for your response!',
      })
      form.reset()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to submit RSVP. Please try again.',
      })
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
          <p className="mt-2 text-gray-600">We're excited to celebrate with you!</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-8 pb-8 space-y-6">
            <div className="space-y-8">
              {/* Guest Count */}
              <div>
                <FormLabel>Number of Guests</FormLabel>
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
                    <h3 className="text-lg font-medium">Guest {index + 1}</h3>
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
                    <FormField
                      control={form.control}
                      name={`people.${index}.firstName`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`people.${index}.lastName`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`people.${index}.email`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input {...field} type="email" />
                              <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`people.${index}.phone`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input {...field} type="tel" />
                              <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`people.${index}.isAttending`}
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start space-y-2">
                          <FormLabel className="font-normal">Will attend</FormLabel>
                          <FormControl>
                            <div className="flex flex-row gap-4">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => form.setValue(`people.${index}.isAttending`, true)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                                  ${
                                    field.value === true
                                      ? 'bg-accent text-white hover:bg-accent/90 hover:text-white'
                                      : 'bg-transparent text-gray-700 hover:bg-gray-200'
                                  }`}
                              >
                                Joyfully Accept
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => form.setValue(`people.${index}.isAttending`, false)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                                  ${
                                    field.value === false
                                      ? 'bg-gray-800 text-white hover:bg-gray-700 hover:text-white'
                                      : 'bg-transparent text-gray-700 hover:bg-gray-200'
                                  }`}
                              >
                                Regretfully Decline
                              </Button>
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
