'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormContext, UseFormReturn } from 'react-hook-form'
import { RSVPFormBlock } from '@/payload-types'
import { Button } from '@/components/ui/button'

type RSVPField = NonNullable<RSVPFormBlock['fields']>[number]

export interface FieldProps extends RSVPField {
  name: string
  control: any
  register: UseFormReturn<{ people: any }>['register']
  placeholder?: string
}

const TextField = ({ name, label, control, required, placeholder, type }: FieldProps) => {
  let fieldType = 'text'
  if (type === 'email') {
    fieldType = 'email'
  }
  if (type === 'number') {
    fieldType = 'number'
  }
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && '*'}
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={fieldType} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const TextareaField = ({ name, label, control, required, placeholder }: FieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="md:col-span-2">
        <FormLabel>
          {label}
          {required && '*'}
        </FormLabel>
        <FormControl>
          <Textarea placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

const RadioField = ({ name, label, control, options = [], required }: FieldProps) => {
  const { setValue } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3 md:col-span-2">
          <FormLabel>
            {label}
            {required && '*'}
          </FormLabel>
          <FormControl>
            <div className="flex flex-row gap-4">
              {options?.map((option) => (
                <Button
                  key={option.id ?? option.label}
                  type="button"
                  variant="outline"
                  onClick={() => setValue(name, option.value)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    field.value === option.value
                      ? 'bg-accent text-white hover:bg-accent/90 hover:text-white'
                      : 'bg-transparent text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const CheckboxField = ({ name, label, control, required }: FieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel className="font-normal">
          {label}
          {required && '*'}
        </FormLabel>
        <FormMessage />
      </FormItem>
    )}
  />
)

const SelectField = ({ name, label, control, options = [], required, placeholder }: FieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>
          {label}
          {required && '*'}
        </FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
)

export const RSVPFields = {
  text: TextField,
  email: TextField,
  textarea: TextareaField,
  checkbox: CheckboxField,
  select: SelectField,
  radio: RadioField,
} as Record<NonNullable<FieldProps['type']>, React.FC<FieldProps>>
