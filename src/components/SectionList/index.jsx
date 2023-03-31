import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../RoomItem'
import { ListWrapper } from './style'


const SectionList = memo(({ list=[], width }) => {
  return (
    <ListWrapper>
      {
        list.slice(0, 8).map(item => (
          <RoomItem key={item.id} item={item} width={width} />
        ))
      }
    </ListWrapper>
  )
})

SectionList.propTypes = {
  list: PropTypes.array.isRequired,
  width: PropTypes.string.isRequired
}

SectionList.displayName = 'SectionList'

export default SectionList