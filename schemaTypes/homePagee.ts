// schemas/homepage.js

export const homPagee = {
    name: 'homepagee',
    title: 'Homepagee',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'quickAccessItems',
            title: 'Quick Access Items',
            type: 'array',
            of: [{ type: 'quickAccess' },  { type: 'blog_contents' }]
            
        },
        {
            name: 'toggle',
            title: 'Toggle',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                        },
                        {
                            name: 'items',
                            title: 'Items',
                            type: 'array',
                            of:[{type:'blog_contents'},{type:'birthday'},{type:'announcement'},{type:'workAnniversary'},{type:'poll'},{type:'newJoiners'}]
                        }

                    ]
                }
            ]
        }
    ],
};
