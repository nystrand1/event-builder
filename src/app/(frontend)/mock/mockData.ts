export const mockData = {
  id: 1,
  name: 'Filip & Josse ',

  eventDetails: {
    eventDate: '2025-11-08T12:00:00.000Z',
    domain: 'filipjosefin',
  },

  theme: {
    theme: 'main',
    primaryColor: '#f4f4f4',
    secondaryColor: '#BFDAA4',
    accentColor: '#BFDAA4',
  },

  headerNav: [
    {
      id: '67b4c54c6eed15171e38ed9c',
      label: 'Start',
      sectionLink: '#Start',
    },

    {
      id: '67b4c54c6eed15171e38ed9d',
      label: 'Intro',
      sectionLink: '#Introduction',
    },

    {
      id: '67b4c54c6eed15171e38ed9e',
      label: 'Tidsplan',
      sectionLink: '#Schedule',
    },

    {
      id: '67b4c54c6eed15171e38ed9f',
      label: 'Följe',
      sectionLink: '#Folje',
    },

    {
      id: '67b4c54c6eed15171e38eda0',
      label: 'Att göra i Estepona',
      sectionLink: '#Att-gora-i-Estepona',
    },

    {
      id: '67b4c54c6eed15171e38eda1',
      label: 'Önskelista',
      sectionLink: '#nskelista',
    },

    {
      id: '67b4c54c6eed15171e38eda2',
      label: 'RSVP',
      sectionLink: '#unnamed',
    },
  ],

  guests: {
    docs: [
      {
        id: 9,
        name: 'Oscar Wallin',
        guestId: 'fb0f011a-1800-4c7c-a424-27cd5ff305a5',

        relatedGuests: [8],
        events: 1,

        rsvpAnswer: {
          'kommer-du': 'yes',
          'vilken-r-din-favoritlt': 'Lady',
          'allergier-eller-annan-specialkost': '',
        },
        updatedAt: '2025-02-16T19:19:36.555Z',
        createdAt: '2025-02-12T16:29:26.510Z',
      },

      {
        id: 8,
        name: 'Kristine Bull',
        guestId: '91f30db3-5d93-4a5e-97a3-84f4e98e1280',

        relatedGuests: [],
        events: 1,

        rsvpAnswer: {
          'kommer-du': 'yes',
          'vilken-r-din-favoritlt': 'Fotbollsvänner',
          'allergier-eller-annan-specialkost': '',
        },
        updatedAt: '2025-02-16T19:19:36.553Z',
        createdAt: '2025-02-12T16:29:21.700Z',
      },
    ],
    hasNextPage: false,
  },

  layout: [
    {
      id: '679680b00f99b5ec38729b0d',

      richText: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              tag: 'h1',
              type: 'heading',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Filip & Josefin',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
            },

            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: '8 November 2025',
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

            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Villa Bermeja ',
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

      media: {
        id: 8,
        alt: null,

        caption: {
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
                    text: 'Här kommer vi ha ceremoni och fest! Läs mer ',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },

                  {
                    id: '6783990859d3e3791ba6b82b',
                    type: 'link',

                    fields: {
                      url: 'https://villabermeja.com/',
                      newTab: true,
                      linkType: 'custom',
                    },
                    format: '',
                    indent: 0,
                    version: 3,

                    children: [
                      {
                        mode: 'normal',
                        text: 'här',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
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
        updatedAt: '2025-01-12T10:27:43.853Z',
        createdAt: '2025-01-11T18:45:06.031Z',
        url: '/static/iks_background.jpg', // replaced
        thumbnailURL: '/static/iks_background.jpg', // replaced
        filename: 'AF1QipMDXHzfEaXfIWo6sWIkQNxVsZbsFRS2_v2vEw7O=s1360-w1360-h1020.jpg',
        mimeType: 'image/jpeg',
        filesize: 368797,
        width: 1360,
        height: 765,
        focalX: 50,
        focalY: 50,

        sizes: {
          thumbnail: {
            url: '/static/iks_background.jpg', // replaced
            width: 300,
            height: 169,
            mimeType: 'image/jpeg',
            filesize: 18803,
            filename: 'thumbnail.jpg',
          },

          square: {
            url: '/static/iks_background.jpg', // replaced
            width: 500,
            height: 500,
            mimeType: 'image/jpeg',
            filesize: 84669,
            filename: 'square.jpg',
          },

          small: {
            url: '/static/iks_background.jpg', // replaced
            width: 600,
            height: 338,
            mimeType: 'image/jpeg',
            filesize: 71061,
            filename: 'small.jpg',
          },

          medium: {
            url: '/static/iks_background.jpg', // replaced
            width: 900,
            height: 506,
            mimeType: 'image/jpeg',
            filesize: 157490,
            filename: 'medium.jpg',
          },

          large: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },

          xlarge: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },

          og: {
            url: '/api/media/file/AF1QipMDXHzfEaXfIWo6sWIkQNxVsZbsFRS2_v2vEw7O=s1360-w1360-h1020-1200x630.jpg',
            width: 1200,
            height: 630,
            mimeType: 'image/jpeg',
            filesize: 266357,
            filename: 'AF1QipMDXHzfEaXfIWo6sWIkQNxVsZbsFRS2_v2vEw7O=s1360-w1360-h1020-1200x630.jpg',
          },
        },
      },
      showCountdown: true,
      eventDate: '2025-11-08T12:00:00.000Z',
      blockName: 'Start',
      blockType: 'fullScreenWithCountdownHero',
    },

    {
      id: '6791450085761a47adb7b0fc',
      title: 'Vi ska gifta oss!',

      text: {
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
                  text: 'Äntligen! Sex jävla år tog det (en flickvän har visat stort tålamod). Men nu ska vi knyta knuten! I november lämnar vi regniga Sverige för spanska solkusten då vi firar med bröllop och fest!',
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

            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },

            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Självklart vill vi dela den här dagen med er, och vi (Filip) har därför samlat all info på den här hemsidan om dagen, platsen, tal och var den bästa tapasen finns i närheten. ',
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

            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },

            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'O.S.A kan ni göra via formuläret längre ner. Se till att ha det gjort senast 18 Oktober. ',
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

      image: {
        id: 18,
        alt: null,
        caption: null,
        updatedAt: '2025-01-22T20:43:57.260Z',
        createdAt: '2025-01-22T20:43:57.260Z',
        url: '/static/iks_background.jpg', // replaced
        thumbnailURL: '/static/iks_background.jpg', // replaced
        filename: '20240726_203611.jpg',
        mimeType: 'image/jpeg',
        filesize: 1136865,
        width: 2544,
        height: 3392,
        focalX: 50,
        focalY: 50,

        sizes: {
          thumbnail: {
            url: '/static/iks_background.jpg', // replaced
            width: 300,
            height: 400,
            mimeType: 'image/jpeg',
            filesize: 23096,
            filename: '20240726_203611-300x400.jpg',
          },

          square: {
            url: '/static/iks_background.jpg', // replaced
            width: 500,
            height: 500,
            mimeType: 'image/jpeg',
            filesize: 47098,
            filename: '20240726_203611-500x500.jpg',
          },

          small: {
            url: '/static/iks_background.jpg', // replaced
            width: 600,
            height: 800,
            mimeType: 'image/jpeg',
            filesize: 80585,
            filename: '20240726_203611-600x800.jpg',
          },

          medium: {
            url: '/static/iks_background.jpg', // replaced
            width: 900,
            height: 1200,
            mimeType: 'image/jpeg',
            filesize: 171392,
            filename: '20240726_203611-900x1200.jpg',
          },

          large: {
            url: '/static/iks_background.jpg', // replaced
            width: 1400,
            height: 1867,
            mimeType: 'image/jpeg',
            filesize: 380885,
            filename: '20240726_203611-1400x1867.jpg',
          },

          xlarge: {
            url: '/static/iks_background.jpg', // replaced
            width: 1920,
            height: 2560,
            mimeType: 'image/jpeg',
            filesize: 670687,
            filename: '20240726_203611-1920x2560.jpg',
          },

          og: {
            url: '/static/iks_background.jpg', // replaced
            width: 1200,
            height: 630,
            mimeType: 'image/jpeg',
            filesize: 130025,
            filename: '20240726_203611-1200x630.jpg',
          },
        },
      },
      imagePosition: 'right',
      blockName: 'Introduction',
      blockType: 'twoColumnImageAndText',
    },

    {
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
    },

    {
      id: '6785604a7b5e72914dc8e783',
      title: 'Följe',
      blockName: 'Folje',

      people: [
        {
          id: '6785604c7b5e72914dc8e785',
          name: 'Sebasitan Blomé',
          role: 'Toastmater',

          image: {
            id: 9,
            alt: '',
            caption: null,
            updatedAt: '2025-01-13T18:50:55.183Z',
            createdAt: '2025-01-13T18:50:55.183Z',
            url: '/static/iks_background.jpg', // replaced
            thumbnailURL: '/static/iks_background.jpg', // replaced
            filename:
              '267658229_7382288641788763_2183939024273024741_n.jpg_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ueP_zi3p1KwQ7kNvgFsoo-d&_nc_zt=23&_nc_ht=scontent-arn2-1.jpg',
            mimeType: 'image/jpeg',
            filesize: 236197,
            width: 1183,
            height: 1182,
            focalX: 50,
            focalY: 50,

            sizes: {
              thumbnail: {
                url: '/static/iks_background.jpg', // replaced
                width: 300,
                height: 300,
                mimeType: 'image/jpeg',
                filesize: 27386,
                filename:
                  '267658229_7382288641788763_2183939024273024741_n.jpg_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ueP_zi3p1KwQ7kNvgFsoo-d&_nc_zt=23&_nc_ht=scontent-arn2-1-300x300.jpg',
              },

              square: {
                url: '/static/iks_background.jpg', // replaced
                width: 500,
                height: 500,
                mimeType: 'image/jpeg',
                filesize: 66638,
                filename:
                  '267658229_7382288641788763_2183939024273024741_n.jpg_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ueP_zi3p1KwQ7kNvgFsoo-d&_nc_zt=23&_nc_ht=scontent-arn2-1-500x500.jpg',
              },

              small: {
                url: '/static/iks_background.jpg', // replaced
                width: 600,
                height: 599,
                mimeType: 'image/jpeg',
                filesize: 89517,
                filename:
                  '267658229_7382288641788763_2183939024273024741_n.jpg_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ueP_zi3p1KwQ7kNvgFsoo-d&_nc_zt=23&_nc_ht=scontent-arn2-1-600x599.jpg',
              },

              medium: {
                url: '/static/iks_background.jpg', // replaced
                width: 900,
                height: 899,
                mimeType: 'image/jpeg',
                filesize: 170559,
                filename:
                  '267658229_7382288641788763_2183939024273024741_n.jpg_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ueP_zi3p1KwQ7kNvgFsoo-d&_nc_zt=23&_nc_ht=scontent-arn2-1-900x899.jpg',
              },

              large: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              xlarge: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              og: {
                url: '/static/iks_background.jpg', // replaced
                width: 1200,
                height: 630,
                mimeType: 'image/jpeg',
                filesize: 138316,
                filename:
                  '267658229_7382288641788763_2183939024273024741_n.jpg_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ueP_zi3p1KwQ7kNvgFsoo-d&_nc_zt=23&_nc_ht=scontent-arn2-1-1200x630.jpg',
              },
            },
          },

          bio: {
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
                      text: 'Härlig filur som är en riktig festprisse. Hör av er till ',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },

                    {
                      type: 'autolink',

                      fields: {
                        url: 'mailto:sebastian.blome@gmail.com',
                        linkType: 'custom',
                      },
                      format: '',
                      indent: 0,
                      version: 2,

                      children: [
                        {
                          mode: 'normal',
                          text: 'sebastian.blome@gmail.com',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      mode: 'normal',
                      text: ' för att anmäla ert tal!',
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
          id: '6791597c1170dca12d348ae3',
          name: 'Linnea Sundberg',
          role: 'Toast madame',

          image: {
            id: 21,
            alt: null,
            caption: null,
            updatedAt: '2025-01-22T20:56:21.192Z',
            createdAt: '2025-01-22T20:56:03.900Z',
            url: '/static/iks_background.jpg', // replaced
            thumbnailURL: '/static/iks_background.jpg', // replaced
            filename: 'Screenshot 2025-01-22 at 21.55.58.png',
            mimeType: 'image/png',
            filesize: 2431787,
            width: 983,
            height: 1194,
            focalX: 50,
            focalY: 50,

            sizes: {
              thumbnail: {
                url: '/static/iks_background.jpg', // replaced
                width: 300,
                height: 364,
                mimeType: 'image/png',
                filesize: 299673,
                filename: 'Screenshot 2025-01-22 at 21.55.58-300x364.png',
              },

              square: {
                url: '/static/iks_background.jpg', // replaced
                width: 500,
                height: 500,
                mimeType: 'image/png',
                filesize: 644810,
                filename: 'Screenshot 2025-01-22 at 21.55.58-500x500.png',
              },

              small: {
                url: '/static/iks_background.jpg', // replaced
                width: 600,
                height: 729,
                mimeType: 'image/png',
                filesize: 1067964,
                filename: 'Screenshot 2025-01-22 at 21.55.58-600x729.png',
              },

              medium: {
                url: '/static/iks_background.jpg', // replaced
                width: 900,
                height: 1093,
                mimeType: 'image/png',
                filesize: 2197557,
                filename: 'Screenshot 2025-01-22 at 21.55.58-900x1093.png',
              },

              large: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              xlarge: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              og: {
                url: '/static/iks_background.jpg', // replaced
                width: 1200,
                height: 630,
                mimeType: 'image/png',
                filesize: 1652989,
                filename: 'Screenshot 2025-01-22 at 21.55.58-1200x630.png',
              },
            },
          },

          bio: {
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
                      text: 'Barndomsvän till bruden',
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
          id: '678561a97b3c0e6b42273992',
          name: 'Kevin Trajkovski',
          role: 'Bestman',

          image: {
            id: 10,
            alt: null,
            caption: null,
            updatedAt: '2025-01-13T18:57:27.515Z',
            createdAt: '2025-01-13T18:57:27.515Z',
            url: '/static/iks_background.jpg', // replaced
            thumbnailURL: '/static/iks_background.jpg', // replaced
            filename:
              '416160284_10160939107256250_2831981026637073047_n.jpg_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2s49Xq4FIV0Q7kNvgH7SSL7&_nc_zt=23&_nc_ht=scontent-arn2-1.jpg',
            mimeType: 'image/jpeg',
            filesize: 88297,
            width: 1198,
            height: 1199,
            focalX: 50,
            focalY: 50,

            sizes: {
              thumbnail: {
                url: '/static/iks_background.jpg', // replaced
                width: 300,
                height: 300,
                mimeType: 'image/jpeg',
                filesize: 7546,
                filename:
                  '416160284_10160939107256250_2831981026637073047_n.jpg_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2s49Xq4FIV0Q7kNvgH7SSL7&_nc_zt=23&_nc_ht=scontent-arn2-1-300x300.jpg',
              },

              square: {
                url: '/static/iks_background.jpg', // replaced
                width: 500,
                height: 500,
                mimeType: 'image/jpeg',
                filesize: 19463,
                filename:
                  '416160284_10160939107256250_2831981026637073047_n.jpg_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2s49Xq4FIV0Q7kNvgH7SSL7&_nc_zt=23&_nc_ht=scontent-arn2-1-500x500.jpg',
              },

              small: {
                url: '/static/iks_background.jpg', // replaced
                width: 600,
                height: 601,
                mimeType: 'image/jpeg',
                filesize: 27979,
                filename:
                  '416160284_10160939107256250_2831981026637073047_n.jpg_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2s49Xq4FIV0Q7kNvgH7SSL7&_nc_zt=23&_nc_ht=scontent-arn2-1-600x601.jpg',
              },

              medium: {
                url: '/static/iks_background.jpg', // replaced
                width: 900,
                height: 901,
                mimeType: 'image/jpeg',
                filesize: 61815,
                filename:
                  '416160284_10160939107256250_2831981026637073047_n.jpg_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2s49Xq4FIV0Q7kNvgH7SSL7&_nc_zt=23&_nc_ht=scontent-arn2-1-900x901.jpg',
              },

              large: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              xlarge: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              og: {
                url: '/static/iks_background.jpg', // replaced
                width: 1200,
                height: 630,
                mimeType: 'image/jpeg',
                filesize: 57980,
                filename:
                  '416160284_10160939107256250_2831981026637073047_n.jpg_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2s49Xq4FIV0Q7kNvgH7SSL7&_nc_zt=23&_nc_ht=scontent-arn2-1-1200x630.jpg',
              },
            },
          },

          bio: {
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
                      text: 'Härlig filur som är en riktig festprisse. Hör av er till ',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },

                    {
                      type: 'autolink',

                      fields: {
                        url: 'mailto:sebastian.blome@gmail.com',
                        linkType: 'custom',
                      },
                      format: '',
                      indent: 0,
                      version: 2,

                      children: [
                        {
                          mode: 'normal',
                          text: 'sebastian.blome@gmail.com',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      mode: 'normal',
                      text: ' för att anmäla ert tal!',
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
          id: '678c0f9b085149581c14df78',
          name: 'Johanna Sucasas Wictorén',
          role: 'Maid of honor',

          image: {
            id: 15,
            alt: null,
            caption: null,
            updatedAt: '2025-01-18T20:32:05.715Z',
            createdAt: '2025-01-18T20:32:05.715Z',
            url: '/static/iks_background.jpg', // replaced
            thumbnailURL: '/static/iks_background.jpg', // replaced
            filename: 'Screenshot 2025-01-18 at 21.31.08.png',
            mimeType: 'image/png',
            filesize: 1635930,
            width: 866,
            height: 888,
            focalX: 50,
            focalY: 50,

            sizes: {
              thumbnail: {
                url: '/static/iks_background.jpg', // replaced
                width: 300,
                height: 308,
                mimeType: 'image/png',
                filesize: 241062,
                filename: 'Screenshot 2025-01-18 at 21.31.08-300x308.png',
              },

              square: {
                url: '/static/iks_background.jpg', // replaced
                width: 500,
                height: 500,
                mimeType: 'image/png',
                filesize: 615285,
                filename: 'Screenshot 2025-01-18 at 21.31.08-500x500.png',
              },

              small: {
                url: '/static/iks_background.jpg', // replaced
                width: 600,
                height: 615,
                mimeType: 'image/png',
                filesize: 881748,
                filename: 'Screenshot 2025-01-18 at 21.31.08-600x615.png',
              },

              medium: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              large: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              xlarge: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              og: {
                url: '/static/iks_background.jpg', // replaced
                width: 1200,
                height: 630,
                mimeType: 'image/png',
                filesize: 1450525,
                filename: 'Screenshot 2025-01-18 at 21.31.08-1200x630.png',
              },
            },
          },

          bio: {
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
                      text: 'Syster till bruden',
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
          id: '67915bd21170dca12d348ae5',
          name: 'Emma Wallberg',
          role: 'Tärna',

          image: {
            id: 22,
            alt: null,
            caption: null,
            updatedAt: '2025-01-22T20:57:59.303Z',
            createdAt: '2025-01-22T20:57:59.303Z',
            url: '/static/iks_background.jpg', // replaced
            thumbnailURL: '/static/iks_background.jpg', // replaced
            filename: 'Screenshot 2025-01-22 at 21.57.51.png',
            mimeType: 'image/png',
            filesize: 2581971,
            width: 1296,
            height: 1362,
            focalX: 50,
            focalY: 50,

            sizes: {
              thumbnail: {
                url: '/static/iks_background.jpg', // replaced
                width: 300,
                height: 315,
                mimeType: 'image/png',
                filesize: 219278,
                filename: 'Screenshot 2025-01-22 at 21.57.51-300x315.png',
              },

              square: {
                url: '/static/iks_background.jpg', // replaced
                width: 500,
                height: 500,
                mimeType: 'image/png',
                filesize: 513949,
                filename: 'Screenshot 2025-01-22 at 21.57.51-500x500.png',
              },

              small: {
                url: '/static/iks_background.jpg', // replaced
                width: 600,
                height: 631,
                mimeType: 'image/png',
                filesize: 734315,
                filename: 'Screenshot 2025-01-22 at 21.57.51-600x631.png',
              },

              medium: {
                url: '/static/iks_background.jpg', // replaced
                width: 900,
                height: 946,
                mimeType: 'image/png',
                filesize: 1481836,
                filename: 'Screenshot 2025-01-22 at 21.57.51-900x946.png',
              },

              large: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              xlarge: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              og: {
                url: '/static/iks_background.jpg', // replaced
                width: 1200,
                height: 630,
                mimeType: 'image/png',
                filesize: 1352643,
                filename: 'Screenshot 2025-01-22 at 21.57.51-1200x630.png',
              },
            },
          },

          bio: {
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
                      text: 'Polare me bruden va',
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
          id: '679158de1170dca12d348ae1',
          name: 'Linn Frölin',
          role: 'Tärna',

          image: {
            id: 19,
            alt: null,
            caption: null,
            updatedAt: '2025-01-22T20:45:30.136Z',
            createdAt: '2025-01-22T20:45:30.136Z',
            url: '/static/iks_background.jpg', // replaced
            thumbnailURL: '/static/iks_background.jpg', // replaced
            filename: '93821251_10159677563963989_5269787270029770752_n.jpg',
            mimeType: 'image/jpeg',
            filesize: 108481,
            width: 1242,
            height: 1242,
            focalX: 50,
            focalY: 50,

            sizes: {
              thumbnail: {
                url: '/static/iks_background.jpg', // replaced
                width: 300,
                height: 300,
                mimeType: 'image/jpeg',
                filesize: 15739,
                filename: '93821251_10159677563963989_5269787270029770752_n-300x300.jpg',
              },

              square: {
                url: '/static/iks_background.jpg', // replaced
                width: 500,
                height: 500,
                mimeType: 'image/jpeg',
                filesize: 34448,
                filename: '93821251_10159677563963989_5269787270029770752_n-500x500.jpg',
              },

              small: {
                url: '/static/iks_background.jpg', // replaced
                width: 600,
                height: 600,
                mimeType: 'image/jpeg',
                filesize: 44560,
                filename: '93821251_10159677563963989_5269787270029770752_n-600x600.jpg',
              },

              medium: {
                url: '/static/iks_background.jpg', // replaced
                width: 900,
                height: 900,
                mimeType: 'image/jpeg',
                filesize: 82245,
                filename: '93821251_10159677563963989_5269787270029770752_n-900x900.jpg',
              },

              large: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              xlarge: {
                url: null,
                width: null,
                height: null,
                mimeType: null,
                filesize: null,
                filename: null,
              },

              og: {
                url: '/static/iks_background.jpg', // replaced
                width: 1200,
                height: 630,
                mimeType: 'image/jpeg',
                filesize: 71745,
                filename: '93821251_10159677563963989_5269787270029770752_n-1200x630.jpg',
              },
            },
          },

          bio: {
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
                      text: 'Barndomsvän till bruden',
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
      blockType: 'peopleBlock',
    },

    {
      id: '67825bfe9a35d2745360e8a3',
      blockName: 'Att-gora-i-Estepona',

      columns: [
        {
          id: '67825c029a35d2745360e8a5',
          size: 'full',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'Att göra i Estepona',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                },
              ],
              direction: 'ltr',
            },
          },
          enableLink: false,

          link: {
            type: 'reference',
            newTab: null,
            url: null,
            label: null,
            appearance: 'default',
          },
        },

        {
          id: '6783dfa140c7159d5c51b9cd',
          size: 'oneThird',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h3',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'Utflykter',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                },

                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      id: '6782c0e8bebfdfad62b04e92',
                      type: 'link',

                      fields: {
                        doc: null,
                        url: 'https://www.google.com/maps/place/29690+Casares,+M%C3%A1laga,+Spanien/@36.4450676,-5.2754585,17z/data=!3m1!4b1!4m6!3m5!1s0xd0cd9014e5a8eb7:0xbcbfd387f8fc960a!8m2!3d36.4439273!4d-5.2730149!16zL20vMGdyZ18y?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D',
                        newTab: false,
                        linkType: 'custom',
                      },
                      format: '',
                      indent: 0,
                      version: 3,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Casares',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      mode: 'normal',
                      text: ' - Fin bergsstad ca 30 minuter utanför Estepona',
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

                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      id: '6782c100bebfdfad62b04e93',
                      type: 'link',

                      fields: {
                        doc: null,
                        url: 'https://www.google.com/maps/place/Gibraltar/@36.1295075,-5.3738995,14z/data=!3m1!4b1!4m6!3m5!1s0xd0cbf762714be35:0x384e25263600870f!8m2!3d36.140751!4d-5.353585!16zL20vMDM1aG0?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D',
                        newTab: false,
                        linkType: 'custom',
                      },
                      format: '',
                      indent: 0,
                      version: 3,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Gibraltar',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      mode: 'normal',
                      text: ' - Här kan du se vilda apor, håll snacksen i din väska dock. Dom kan vara aggressiva. Fin vy från berget ',
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
          enableLink: null,

          link: {
            type: 'reference',
            newTab: null,
            url: null,
            label: null,
            appearance: 'default',
          },
        },

        {
          id: '6783dfa540c7159d5c51b9cf',
          size: 'oneThird',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h3',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'Restauranger',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                },

                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      id: '6782c14abebfdfad62b04e94',
                      type: 'link',

                      fields: {
                        doc: null,
                        url: 'https://labullagastrobar.com/',
                        newTab: false,
                        linkType: 'custom',
                      },
                      format: '',
                      indent: 0,
                      version: 3,

                      children: [
                        {
                          mode: 'normal',
                          text: 'La bulla gastrobar',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      mode: 'normal',
                      text: ' - Vår favoritrestuarang, prova "lövet"!',
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
          enableLink: null,

          link: {
            type: 'reference',
            newTab: null,
            url: null,
            label: null,
            appearance: 'default',
          },
        },

        {
          id: '6783dfad40c7159d5c51b9d1',
          size: 'oneThird',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h3',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'Vingårder',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                },

                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      id: '6782c1b8bebfdfad62b04e95',
                      type: 'link',

                      fields: {
                        doc: null,
                        url: 'https://bodegadonafelisa.com/en/ronda-wine-tasting/#',
                        newTab: false,
                        linkType: 'custom',
                      },
                      format: '',
                      indent: 0,
                      version: 3,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Ronda',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      mode: 'normal',
                      text: ' - Fin vingård med guidade turer ',
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
          enableLink: null,

          link: {
            type: 'reference',
            newTab: null,
            url: null,
            label: null,
            appearance: 'default',
          },
        },
      ],
      blockType: 'content',
    },

    {
      id: '678692d1b80dc228d31d2e9e',
      title: 'Önskelista',

      text: {
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
                  text: 'Vår största önskan är att ni kommer på bröllopet, men om ni ändå vill uppmärksamma oss med en gåva så finns det nedan en lista. Om du planerar att köpa något från listan, se till att reservera den så att ni inte riskar att köpa samma sak som en annan gäst.',
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

      wishList: {
        id: 1,
        title: 'Filip & Josse',
        event: 1,

        items: [
          {
            id: '678b8a6f8cd6686b2e401430',
            name: 'Matteus tallrikar',
            description: null,
            link: 'https://www.mateuscollection.com/se/tallrikar/assietter/msy-plate-sand-20-cm',
            quantity: 8,
            image: 12,

            reservationCodes: [
              {
                id: '678b926785cf37f2efd36c7f',
                code: 'test-code',
                quantity: 1,
              },

              {
                id: '678b933b39ecd1f2efbab6b6',
                code: 'test-code',
                quantity: 3,
              },

              {
                id: '678b961038714df2efdc1001',
                code: 'test-code',
                quantity: 1,
              },

              {
                id: '678c04843db4b8f2efb55247',
                code: 'test-code',
                quantity: 3,
              },
            ],
          },

          {
            id: '678b90b99fa95144edfdcc38',
            name: 'Kaffe',
            description: null,
            link: 'https://www.mateuscollection.com/se/tallrikar/assietter/msy-plate-sand-20-cm',
            quantity: 3,
            image: 8,

            reservationCodes: [],
          },

          {
            id: '678c0e02085149581c14df76',
            name: 'Hund',
            description: null,
            link: 'https://www.doggie.se/globalassets/doggie/hundraser/maltipoo/maltipoo-2.jpg?ref=64675',
            quantity: 2,
            image: 14,

            reservationCodes: [
              {
                id: '6799057b276a1f098e3dfab1',
                code: 'l9pkk7xxihozx1kcnz02d',
                quantity: 1,
              },

              {
                id: '67990d7201892e098e9095cf',
                code: '1SCB',
                quantity: 1,
              },
            ],
          },

          {
            id: '678e755e9924d51f77d7ff6b',
            name: 'En upplevelse',

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
                        text: 'Att hänga med er är det bästa vi det! En upplevelse tillsammans vore en utmärkt gåva!',
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
            link: null,
            quantity: null,
            image: 12,

            reservationCodes: [],
          },
        ],
        updatedAt: '2025-01-29T19:40:22.242Z',
        createdAt: '2025-01-18T11:00:41.006Z',
      },
      blockName: 'nskelista',
      blockType: 'wishlistBlock',
    },

    {
      id: '67a23e3551f80fb16f05012e',
      title: 'OSA',
      guestFormTitle: 'Kommer du, {{ guestName }}?',

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
                  text: 'Vår största önskan är att ni kommer på vårt bröllop! Men går det inte så går det inte, men låt oss veta oavsett i formuläret nedan!',
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
      blockName: 'unnamed',

      fields: [
        {
          id: '67a74ba0390c227ee67f3f04',
          label: 'Kommer du?',
          type: 'radio',
          required: true,

          options: [
            {
              id: '67a74bab390c227ee67f3f06',
              label: 'Ja självklart',
              value: 'yes',
            },

            {
              id: '67a74bba390c227ee67f3f08',
              label: 'Tyvärr inte',
              value: 'no',
            },
          ],
        },

        {
          id: '67a74bf8390c227ee67f3f0a',
          label: 'Allergier eller annan specialkost',
          type: 'textarea',
          required: null,

          options: [],
        },
      ],
      blockType: 'rsvpFormBlock',
    },
  ],
  updatedAt: '2025-02-18T17:37:16.963Z',
  createdAt: '2025-01-11T11:55:26.251Z',
  _status: 'published',
}
