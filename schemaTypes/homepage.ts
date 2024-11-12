export const homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {

      name: 'path',
      type: 'string',
      title: 'Home Page Path'

    },
    {
      name: 'navigationItems',
      type: 'array',
      title: 'Navigation Items',
      of: [
        {
          type: 'object',
          fields: [
            {

              name: 'title',
              type: 'string',
              title: 'Title'

            },
            {

              name: 'path',
              type: 'string',
              title: 'Path'

            },
            {
              name: 'homepage_cards',
              title: 'Homepage Cards',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'cards' }], // Reference to the card document
                },
              ],
            },
            // {

            //   name: 'announcement',
            //   title: 'Announcement',
            //   type: 'array',
            //   of: [{ type: 'string' }],

            // },
            {
              name: 'action1',
              type: 'boolean',
              title: 'Action1',
              description: 'Indicates if the item is currently active.',
            },
            // {
            //   name: 'homepage_birthdays',
            //   title: 'Homepage Birthdays',
            //   type: 'array',
            //   of: [
            //     {
            //       type: 'reference',
            //       to: [{ type: 'birthdays' }], // Reference to the birthdays document
            //     },
            //   ],
            // },
            {
              name: 'action2',
              type: 'boolean',
              title: 'Action2',
              description: 'Indicates if the item is currently active.',
            },

          ],
        },
      ],
    },
  ],

    }
