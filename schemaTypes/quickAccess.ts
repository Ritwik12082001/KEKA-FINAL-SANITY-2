// schemas/quickAccess.js

export const quickAccess = {
  name: 'quickAccess',
  title: 'Quick Access',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'subContents',
      title: 'Sub Contents',
      type: 'array',
      of: [{ type: 'quickAccess' }]

      // options: {
      //   list: [
      //     { title: 'Holiday', value: 'holiday' },
      //     { title: 'On Leave Today', value: 'onLeaveToday' },
      //     { title: 'Working Remotely', value: 'workingRemotely' },
      //   ],
      // },
    },
    {
      name: 'employees',
      title: 'Employes',
      type: 'array',
      of: [{
        name: "employee",
        type: 'reference',
        to: [{type:'employee'}]
      }]
    }

  ],
};
