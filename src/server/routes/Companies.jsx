import config from '../../config';
const prefix = config.API_HOST;

const company = {
  getAll: {api: `${prefix}/companies`, params: null},
  getColumns: {api: `${prefix}/companies/columnsTable`, params: null},
  getById: {api: `${prefix}/companies`, params: ['id']},
  insert: {api: `${prefix}/companies`, params: null},
};

export default company;