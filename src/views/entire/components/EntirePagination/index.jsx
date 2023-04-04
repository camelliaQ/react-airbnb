import React, { memo, useState } from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomListAction } from '@/store/modules/entire'

const EntirePagination = memo((props) => {
  const totalCount = useSelector(({entire}) => entire.totalCount)
  const [current, setCurrent] = useState(1)
  const pageSize = 20

  const dispatch = useDispatch()
  const pageChange = (page) => {
    window.scroll({ top: 0 })
    dispatch(getRoomListAction(page -1))
    setCurrent(page)
  }

  const start = pageSize * (current - 1) + 1
  const end  = current * pageSize
  return (
    <PaginationWrapper>
      <Pagination onChange={pageChange} current={current} pageSize={pageSize} total={totalCount} showSizeChanger={false} />
      <div className='info'>
        第 {start} - {end} 个房源，共超过{totalCount}个
      </div>
    </PaginationWrapper>
  )
})

EntirePagination.displayName = 'EntirePagination'

export default EntirePagination