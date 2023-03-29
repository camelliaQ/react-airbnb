const path = require('path')

// 配置写法： 基于webpack去编写
module.exports = {
  // 开发服务器
  devServer: {
    port: 5000
  },
  // webpack其他配置
  webpack: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': path.resolve(__dirname, 'src/components'),
      '@v': path.resolve(__dirname, 'src/views')
    }
  }
}