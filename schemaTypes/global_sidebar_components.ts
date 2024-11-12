export const global_sidebar_components = {
    name: 'global_sidebar_components',
    title: 'Global Sidebar Components',
    type: 'document',
    fields:[
        {
            name : 'title',
            title:'Title',
            type: 'string'
        },
        ({
            name: 'navigationItems',
            type: 'array',
            title: 'Navigation Items',
            of: [
              {
                type: 'object',
                fields: [
                  ({
                      name : 'title',
                      type : 'string',
                      title : 'Title of Navbar',
                  }),
                  ({
                    name: 'path',
                    type: 'string',
                    title: 'Path',
                  }),
                  ({
                    name: 'logo',
                    type: 'image',
                    title: 'Logo',
                    options:[{hotspot : 'true'}],
                  }),
                   ({
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    description: 'Display name of the navigation item (e.g., "Home", "Inbox").',
                  }),
                  ({
                    name: 'isActive',
                    type: 'boolean',
                    title: 'Is Active',
                    description: 'Indicates if the item is currently active.',
                  })
                ]
              }
            ]
          })
  
    ]
}