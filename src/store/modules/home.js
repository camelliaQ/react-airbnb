// 首页模块Reducer
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotData, getHomeLongforData, getHomePlusData } from '@/api/modules/home'
import { createSlice } from '@reduxjs/toolkit'

// 创建切片【模块】
const homeSlice = createSlice({
  name: 'home',
  initialState: { 
    goodInfo: {}, //优质房源
    highInfo: {}, //高分房源
    hotInfo: {}, // 热门房源
    discountInfo: {}, // 折扣房源
    longforInfo: {}, // 猜你想去
    plusInfo: {}, // plus房源
  },
  reducers: {
    setRoom(state, { payload }) {
      state.goodInfo = payload[0]
      state.highInfo = payload[1]
      state.hotInfo = payload[2]
      state.discountInfo = payload[3]
      state.longforInfo = payload[4]
      state.plusInfo = payload[5]
    }
  }
})

// 获取首页数据action
export const getHomeDataAction = () => async (dispatch) => {
  const requestArr = [
    getHomeGoodPriceData(),
    getHomeHighScoreData(),
    getHomeHotData(),
    getHomeDiscountData(),
    getHomeLongforData(),
    getHomePlusData()
  ]
  const res = await Promise.all(requestArr)
  dispatch(setRoom(res))
}

// 导出reducer
export const { setRoom } = homeSlice.actions

export default homeSlice.reducer

