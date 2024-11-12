export const announcement = {
    name: 'announcement',
    type: 'document',
    fields: [
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name: 'announcement',
            title: 'Announcement',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}