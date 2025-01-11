import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { adminOnly } from '@/access/adminOnly'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: {
    useAPIKey: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Basic User', value: 'basicUser' },
        { label: 'Medium User', value: 'mediumUser' },
        { label: 'Premium User', value: 'premiumUser' },
      ],
    },
    {
      name: 'events',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
      access: {},
    },
  ],
  timestamps: true,
}
