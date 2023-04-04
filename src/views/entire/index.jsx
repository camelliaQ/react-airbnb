import { getRoomListAction } from '@/store/modules/entire'
import { setHeaderConfig } from '@/store/modules/global'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './components/EntireFilter'
import EntireList from './components/EntireList'
import EntirePagination from './components/EntirePagination'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderConfig({ isFixed: true }))
    dispatch(getRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      {/* 筛选列表 */}
      <EntireFilter />
      {/* 房源列表 */}
      <EntireList />
      {/* 分页器 */}
      <EntirePagination />
    </EntireWrapper>
  )
})

Entire.displayName = 'Entire'

export default Entire