const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'env.config.isProd': prod,
  'env.config.couchdbUrl': prod ? 'https://api.educe.nz/api/d' : 'http://localhost:9000/api/d',
  'env.config.elasticUrl': prod ? 'https://api.educe.nz/api/es' : 'http://localhost:9000/api/es',
  'env.config.RN': true,
  'NODE_ENV': 'development'
}