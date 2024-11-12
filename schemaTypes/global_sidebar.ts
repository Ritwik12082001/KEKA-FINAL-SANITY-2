export const global_sidebar = {
    name: 'global_sidebar',
    title: 'Global Sidebar',
    type: 'document',
    fields:[
        {
            name: 'sidebar_component_name',
            title: 'Sidebar Component Name',
            type: 'string',
        },
        {
            name: 'sidebar',
            title: 'Sidebar',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'global_sidebar_components' }], // Reference to the global sidebar components document
              },
            ],
        },
        {
            name: 'sidebar_component_description',
            title: 'Sidebar Component Description',
            type: 'string',
        },
    ]
}