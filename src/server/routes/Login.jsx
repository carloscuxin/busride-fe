import config from '../../config';
const prefix = config.API_HOST;

const login = {
  login: {api: `${prefix}/login`, params: ["user", "password"]},
};

export default login;