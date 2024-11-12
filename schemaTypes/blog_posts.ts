export const blogPosts = {
    name: 'blog_contents',
    title: 'Blog Contents',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
          name: 'employee',
          title: 'Employee',
          type: 'reference',
          to: [{type:'employee'}]
        }
    ]
}