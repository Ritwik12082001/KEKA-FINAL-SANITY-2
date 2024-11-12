export const myTeam = {
    name: 'my_team_page',
    title: 'My Team Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'myteam_landing_page',
            title: 'MyTeam Landing Page',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title'
                        },
                        {
                            title: 'Not In Yet Image (Employee Image)',
                            name: 'not_yet_in_image',
                            type: 'image',
                            options: {
                                hotspot: true
                            },

                        },
                        {
                            name: 'caption_not_yet_in',
                            title: 'Caption Not Yet In',
                            type: 'array',
                            of: [{ type: 'string' }]
                        },
                        {
                            name: 'myTeam_cards',
                            title: 'My Team Cards',
                            type: 'array',
                            of: [
                                {
                                    type: 'reference',
                                    to: [{ type: 'cards' }], // Reference to the card document
                                },
                            ],
                        },
                        {
                            name: 'team_calender',
                            title: 'Team Calender',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name:'field_image',
                                            title:'Field Image',
                                            type:'image'
                                        },
                                        {
                                            name:'field_image_name',
                                            title:'Field Image Name',
                                            type:'string'
                                        },
                                        {
                                            name:'field_days',
                                            title:'Field Days',
                                            type:'array',
                                            of:[{type:'number'}]
                                        },
                                        {
                                            name:'field_array_of_week_days',
                                            title:'Field Array of Week Days',
                                            type:'array',
                                            of:[{type:'string'}]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

            ]
        },
    ],
    }