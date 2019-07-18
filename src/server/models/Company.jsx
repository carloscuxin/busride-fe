const Company = {
  business_name: {
    type: 'string',
    notNull: true,
    required: true,
    minLength: 5,
    maxLength: 60,
  },
  commercial_name: {
    type: 'string',
    notNull: true,
    required: true,
    minLength: 5,
    maxLength: 60,
  },
  phone: {
    type: 'number',
    notNull: true,
    required: true,
    minLength: 7,
    maxLength: 10,
  },
  email: {
    type: 'email',
    notNull: true,
    required: true,
    minLength: 5,
    maxLength: 45,
  },
  web_page: {
    type: 'email',
    notNull: false,
    required: false,
    minLength: 5,
    maxLength: 45,
  }
};

export default Company;