const Company = () => {
  const business_name = {
    type: 'string',
    notNull: true,
    required: true,
    minLength: 5,
    maxLength: 60,
  };
  const commercial_name = {
    type: 'string',
    notNull: true,
    required: true,
    minLength: 5,
    maxLength: 60,
  };
  const phone = {
    type: 'number',
    notNull: true,
    required: true,
    minLength: 7,
    maxLength: 10,
  };
  const email = {
    type: 'email',
    notNull: true,
    required: true,
    minLength: 5,
    maxLength: 45,
  };
  const web_page = {
    type: 'email',
    notNull: false,
    required: false,
    minLength: 5,
    maxLength: 45,
  };

  return ({business_name, commercial_name, phone, email, web_page});
};
export default Company;