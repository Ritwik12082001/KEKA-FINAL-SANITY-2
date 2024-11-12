export const sideBar={
    name:'sideBar',
    title:'Side Bar',
    type:'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'path',
            title: 'Path',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'
        },
        {
            name:'image',
            title:'Image',
            type:'image'
        },
        {
            name:'components',
            title:'Components',
            type:'array',
            of:[{type:'subComponents'}]
        }

    ]
}