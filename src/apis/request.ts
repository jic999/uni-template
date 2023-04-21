const BASE_URL = 'https://example.com'

const httpsRegular = /^https?/
export function req(options: UniNamespace.RequestOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    const isHttps = httpsRegular.test(options.url)
    if (!isHttps)
      options.url = BASE_URL + options.url

    uni.request({
      ...options,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err.errMsg)
      },
    })
  })
}
