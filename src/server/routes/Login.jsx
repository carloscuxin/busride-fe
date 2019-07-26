import config from '../../config';
const prefix = config.API_HOST;

const login = {
  login: {api: `${prefix}/login`, params: ["user", "password"]},
  isAuthenticated: {api: `${prefix}/isAuthenticated`, params: ["user"]},
};

export default login;