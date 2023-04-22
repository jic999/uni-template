const BASE_URL = 'https://example.com'
const httpsRegular = /^https?/
export type ReqMethodType = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

uni.addInterceptor('request', {
  invoke(options) {
    console.log('before request', options)
    // 若为完整链接 直接使用 否则 拼接Base_URL
    const isHttps = httpsRegular.test(options.url)
    if (!isHttps)
      options.url = BASE_URL + options.url
  },
  success(res) {
    console.log('after success', res)
  },
  fail(err) {
    console.log('after fail', err)
  },
  complete(res) {
    console.log('after complete', res)
  },
})

export function req(method: ReqMethodType, url: string, options?: UniNamespace.RequestOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      method,
      url,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err.errMsg)
      },
    })
  })
}
