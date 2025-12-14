'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RSVPFormBlock } from '@/payload-types'
import { FieldErrorsImpl, useFormContext } from 'react-hook-form'
import { Error } from './Error'

type RSVPField = NonNullable<RSVPFormBlock['fields']>[number]

export interface FieldProps extends RSVPField {
  name: string
  placeholder?: string
  defaultValue?: string
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any
    }>
  >
}

const TextField = ({
  name,
  label,
  required,
  errors,
  placeholder,
  type,
  defaultValue,
}: FieldProps) => {
  const { register } = useFormContext()
  let fieldType = 'text'
  if (type === 'email') {
    fieldType = 'email'
  }
  if (type === 'number') {
    fieldType = 'number'
  }
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && '*'}
      </Label>
      <Input
        id={name}
        type="text"
        placeholder={placeholder}
        {...register(name, { required: !!required, value: defaultValue })}
      />
      {required && errors[name] && <Error />}
    </div>
  )
}

const TextareaField = ({ name, label, required, errors, placeholder }: FieldProps) => {
  const { register } = useFormContext()
  return (
    <div className="md:col-span-2">
      <Label htmlFor={name}>
        {label}
        {required && '*'}
      </Label>
      <Textarea {...register(name, { required: !!required })} placeholder={placeholder} />
      {required && errors[name] && <Error />}
    </div>
  )
}

const RadioField = ({ name, label, options = [], errors, required }: FieldProps) => {
  const { register, setValue, watch } = useFormContext()
  const fieldValue = watch(name)

  return (
    <div className="md:col-span-2">
      <Label htmlFor={name}>
        {label}
        {required && '*'}
      </Label>
      <div className="flex flex-row gap-4">
        {options?.map((option) => (
          <Button
            key={option.id ?? option.label}
            type="button"
            variant="outline"
            onClick={() => setValue(name, option.value, { shouldValidate: true })}
            className={`px-6 py-2 rounded-full font-medium transition-colors
            ${
              fieldValue === option.value
                ? 'bg-accent text-white hover:bg-accent/90 hover:text-white'
                : 'bg-transparent text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <input type="hidden" {...register(name, { required: !!required })} />
      {required && errors[name] && <Error />}
    </div>
  )
}

export const RSVPFields = {
  text: TextField,
  email: TextField,
  textarea: TextareaField,
  radio: RadioField,
} as Record<NonNullable<FieldProps['type']>, React.FC<FieldProps>>
