import config from '../../config';
const prefix = config.API_HOST;

const vehicle = {
  getAll: {api: `${prefix}/vehicles`, params: null},
  getColumns: {api: `${prefix}/vehicles/columnsTable`, params: null},
  getById: {api: `${prefix}/vehicles`, params: ['id']},
  insert: {api: `${prefix}/vehicles`, params: null},
};

export default vehicle;