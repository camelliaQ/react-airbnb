import RoomItem from '@/components/RoomItem'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ListWrapper } from './style'

const EntireList = memo((props) => {
  const { entireList, totalCount, loading } = useSelector(({ entire }) => entire, shallowEqual)
  return (
    <ListWrapper>
      {!!totalCount && <h2 className='title'>{totalCount}多处住所</h2>}
      <div className='list'>
        {
          entireList.map(item => (
            <RoomItem key={item.id} item={item} width='20%' />
          ))
        }
      </div>
      {loading && <div className='mask' />}
    </ListWrapper>
  )
})

EntireList.displayName = 'EntireList'

export default EntireList