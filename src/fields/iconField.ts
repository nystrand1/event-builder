import { GroupField } from 'payload'

const uniqueLucideIcons = [
  'Heart',
  'Blend',
  'Users',
  'GanttChartSquare',
  'Gift',
  'Hotel',
  'MicVocal',
  'ListTodo',
]

export const iconField: GroupField = {
  name: 'icon',
  type: 'group',
  fields: [
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'None', value: 'none' },
        ...uniqueLucideIcons.map((iconName) => ({
          label: iconName.replace(/([A-Z])/g, ' $1').trim(), // Convert camelCase to spaces
          value: iconName,
        })),
      ],
      defaultValue: 'none',
    },
  ],
}
