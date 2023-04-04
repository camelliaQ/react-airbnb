import { configureStore } from '@reduxjs/toolkit'
import home from './modules/home'
import entire from './modules/entire'
import global from './modules/global'

// 配置store仓库
const store = configureStore({
  reducer: { home, entire, global },
})

export default store
