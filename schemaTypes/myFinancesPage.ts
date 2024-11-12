export const myFinancesPage = {
    name: 'my_finances_page',
    title: 'My Finances Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'my_finances_landing_pages',
        title: 'My Finances Landing Pages',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
                {
                    name:'title',
                    title:'Title',
                    type:'string'
                },
                {
                    name:'descriptions',
                    title:'Descriptions',
                    type:'array',
                    of:[{type:'string'}],
                },
                {
                    name:'list_items',
                    title:'List Items',
                    type:'array',
                    of:[{type:'string'}],
                }
            ]
        }
    ]
}
    ]
}