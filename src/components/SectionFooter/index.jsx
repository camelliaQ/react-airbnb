import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo(({ name }) => {
  const moreText = name ? `显示更多${name}房源` : '显示全部'
  return (
    <SectionFooterWrapper name={name}>
      <div className='more'>
        {moreText}
        <div className='icon'>
          <IconMoreArrow />
        </div>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

SectionFooter.displayName = 'SectionFooter'

export default SectionFooter 