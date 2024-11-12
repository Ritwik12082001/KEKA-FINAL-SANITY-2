export const workAnniversary = {
    name: 'workAnniversary',
    title: 'Work Anniversary',
    type: 'document',
    fields: [
      {
        name:'title',
        title:'Title',
        type:'string'
      },
      
      {
        name: 'employee',
        title: 'Employee',
        type: 'array',
        of:[
          {
            name:'employees',
            type:'reference',
            to: [{type:'employee'}]
          }
        ]
       
        }
      
    ]
  }