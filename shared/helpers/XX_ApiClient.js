import axios from 'axios';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  // if (__SERVER__) {
  //   // Prepend host and port of the API server to the path.
  //   return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
  // }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api' + adjustedPath;
}

class ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { data } = {}) => new Promise((resolve, reject) => {
        resolve(axios[method](formatUrl(path), data))
      }));
  }
}

export default client = new ApiClient();
