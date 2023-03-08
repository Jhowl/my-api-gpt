import debug from 'debug'

export default (namespace, message) => {
  debug(`my-api:${namespace}`)(`[${new Date().toUTCString()}] ${message}`)
}
