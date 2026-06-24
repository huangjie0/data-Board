import Mock from 'mockjs'

// 统一 mock 接口集合
const mockApi = {
  // GET 示例
  '/api/getList': () => {
    return Mock.mock({
      code: 200,
      message: '请求成功',
      data: {
        list: '@array(5, { id: @id, name: @cname, age: @integer(18, 35) })'
      }
    })
  },
  // POST 示例（可接收请求参数）
  '/api/login': (params: any) => {
    const { username, password } = params
    if (username === 'admin' && password === '123456') {
      return Mock.mock({
        code: 200,
        token: '@string(32)',
        message: '登录成功'
      })
    }
    return { code: 401, message: '账号或密码错误' }
  }
}

export default mockApi