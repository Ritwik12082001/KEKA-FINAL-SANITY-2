export const employee = {
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    {
      name: 'empNAme',
      title: 'Employee Name',
      type: 'string',
    },
    // {
    //   title: 'Image',
    //   name: 'image',
    //   type: 'image',
    //   options: {
    //     hotspot: true
    //   },

    // },
    {
      name: 'employeeId',
      title: 'Employee Id',
      type: 'number',

    },
    {
      name: 'employeeDesignation',
      title: 'Employee Designation',
      type: 'string',
    },
    {
      name: 'employeeMailId',
      title: 'Employee Mail Id',
      type: 'string',
    },
    {
      name: 'employeePhoneNumber',
      title: 'Employee Phone Number',
      type: 'number',
    },
    {
      name: 'employeeAddress',
      title: 'Employee Address',
      type: 'string',

    },
    // {
    //   name: 'employeeReportingManager',
    //   title: 'Employee Reporting Manager',
    //   type: 'reference',
    //   to: [{type:'employee'}]
    // }
  ]
}
