export const birthday = {
  name: 'birthday',
  title: 'Birthday',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'employees',
      title: 'Employees',
      type: 'array',
      of:[
        {
          name:'employee',
          type:'reference',
          to: [{ type: 'employee' }]
        }
        

      ]
      
    }
  ]
}