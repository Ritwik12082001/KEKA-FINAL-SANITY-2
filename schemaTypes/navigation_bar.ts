export const navigationBar = {
    name: 'navigationBar',
    title: 'Navigation Bar',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
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
                            title: 'Title of Navbar',
                        },
                        {
                            name: 'path',
                            type: 'string',
                            title: 'Path',
                        },
                        {
                            name: 'icon',
                            type: 'image',
                            title: 'Icon',
                        },
                        {
                            name: 'navigationItemsSubbar',
                            type: 'array',
                            title: 'Navigation Items',
                            of:[
                                {
                                    type:'object',
                                    fields:[
                                        {
                                            name: 'title',
                                            type: 'string',
                                            title: 'Title of Navbar1',
                                        },
                                        {
                                            name: 'Items',
                                            type: 'reference',
                                            to:[{type:'navigationBar'}]
                                           
                                        }
                                        
                                    ]
                                }
                                
                            ]
                        }


                    ]
                }
            ]
        }
    ]
}