import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'

export const Text: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
  }
> = ({ name, errors, label, register, required: requiredFromProps, width }) => {
  console.log('textfield', name)
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} type="text" {...register(name, { required: requiredFromProps })} />
      {requiredFromProps && errors[name] && <Error />}
    </div>
  )
}
