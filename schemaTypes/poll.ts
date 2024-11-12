export const poll = {
    name: 'poll',
    title: 'poll',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'pollEmployees',
            title: 'Poll Employees',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'employee' }]
                }
            ]

        }
    ]
}