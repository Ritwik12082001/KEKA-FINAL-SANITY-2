export const newJoiners = {
    name: 'newJoiners',
    title: 'newJoiners',
    type: 'document',
    fields: [
        {
            name: 'newJoinersList',
            title: 'New Joiners',
            type: 'array',
            of: [{ type: 'employee' }]
        }
    ]
}