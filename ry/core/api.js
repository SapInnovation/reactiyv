import axios from 'axios';

const config = {
  apiProtocol: 'http',
  apiHost: '',
  apiKey: '',
  timeout: 60000
};

function createRequestOptions() {
  return {
    method: 'get',
    baseURL: `${config.apiProtocol || 'https'}://${config.apiHost}`,
    timeout: config.timeout,
    headers: {
      'Access-Control-Allow-Origin': true,
      Authorization: `Bearer <token>`
    }
  };
}

function createGeneralRequestOptions() {
  return {
    method: 'get',
    timeout: config.timeout,
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': true
    }
  };
}

export const get = path => axios.get(path, createRequestOptions());
export const getExt = path => axios.get(path, createGeneralRequestOptions());
