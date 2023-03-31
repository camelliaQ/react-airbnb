import React, { memo } from 'react'
import { Rate } from 'antd'
import PropTypes from 'prop-types'
import { ItemWrapper } from './style'

const RoomItem = memo(({item, width='25%'}) => {
  return (
    <ItemWrapper rateColor={item.star_rating_color} textColor={item.verify_info.text_color} width={width}>
      <div className='content'>
        <div className='cover'>
          <img src={item.picture_url} alt="" />
        </div>
        <div className='desc'>{item.verify_info.messages.join(' · ')}</div>
        <div className='name mle'>{item.name}</div>
        <div className='price'>{item.price_format}/晚</div>
        <div className='bottom'>
          <Rate className='rate' allowHalf disabled defaultValue={item.star_rating} />
          <span className='count'>{item.reviews_count}</span>
          { item.bottom_info && '·' + item.bottom_info.content }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  item: PropTypes.object,
  width: PropTypes.string
}

RoomItem.displayName = 'RoomItem'

export default RoomItem