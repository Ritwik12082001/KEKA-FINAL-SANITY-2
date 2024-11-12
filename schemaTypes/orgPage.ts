export const orgPage = {
  name: 'org_page',
  title: 'Organization Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'org_landing_pages',
      title: 'Org Landing Pages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'org_page_title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'org_page_cards',
              title: 'Org Page Cards',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'cards' }], // Reference to the card document
                },
              ],
            },
          ]
        }
      ]
    }
  ]
}