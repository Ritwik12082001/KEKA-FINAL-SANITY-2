export const cards ={
    name : 'cards',
    title:'Cards',
    type:'document',
    fields:[
        {
            name: 'header',
            type: 'string',
            title:'Header'
        },
        {
            title:'Meta_Description',
            name:'meta_description',
            type:'array',
            of:[{type:'string'}],
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true
            },
            
          },
    ]
}