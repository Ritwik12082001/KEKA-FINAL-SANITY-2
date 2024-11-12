export const global_navbar = {
  name: 'global_navbar',
  title: 'Global Navbar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Keka_Image',
      name: 'keka_image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      title: 'Techouts',
      name: 'techouts',
      type: 'string',
      

    },
    {
      name: 'search_bar_content',
      type: 'string',
      title: 'Search Bar Content'
    },
    {
      name: 'search_bar_search_icon',
      type: 'image',
      title: 'Search Bar Search Icon'
    },
    {
      name: 'employee_field',
      title: 'Employee Field',
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
              name: 'employee_image',
              title: 'Employee Image',
              type: 'image',
            },
            {
              name: 'fields',
              title: 'Fields',
              type: 'array',
              of:[
                {
                  type : 'object',
                  fields:[
                    {
                      name:'title',
                      title:'Title',
                      type:'string'
                    },
                    {
                      name:'view_profile',
                      title:'View Profile',
                      type:'reference',
                      to:[{type:'myProfilePage'}]
                    }
                  ]
                }
              ]
            }
          ]
        }

      ]
    }



  ],
}