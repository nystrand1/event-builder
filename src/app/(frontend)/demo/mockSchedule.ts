import { Event } from '@/payload-types'

export const mockSchedule = {
  id: '678e79029924d51f77d7ff6f',
  title: 'Tidsplan',
  blockName: 'Schedule',

  schedule: [
    {
      id: '678e79139924d51f77d7ff71',
      title: 'Ankomst och mingel',
      time: '14:00 - 14:30',

      description: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Serveras kanapéer och bubbel',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },
          ],
          direction: 'ltr',
        },
      },
    },

    {
      id: '678e7caeb9c000a427a8d7da',
      title: 'Fotografering',
      time: '15:00',

      description: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Välkommen linslus på fotografering! Ta gärna en bild med oss',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },
          ],
          direction: 'ltr',
        },
      },
    },

    {
      id: '678e7cacb9c000a427a8d7d4',
      title: 'Ceremoni',
      time: '16:00',

      description: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Ceremonidags! Detta sker på plats, ute på gräsmattan med fett najs utsikt',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },
          ],
          direction: 'ltr',
        },
      },
    },
  ],
  blockType: 'schedule',
} as Event['layout'][number]
