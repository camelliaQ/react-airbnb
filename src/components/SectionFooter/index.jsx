import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo(({ name }) => {
  const moreText = name ? `显示更多${name}房源` : '显示全部'

  const navigate = useNavigate()
  const goMore = () => {
    navigate('/entire')
  }

  return (
    <SectionFooterWrapper name={name}>
      <div className='more' onClick={goMore}>
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