import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionHeaderWrapper } from './style'

const SectionHeader = memo(({ title, subtitle }) => {
  return (
    <SectionHeaderWrapper>
      {/* 主标题 */}
      <h2 className='title'>{title}</h2>
      {/* 副标题 */}
      { subtitle && <h3 className='subtitle'>{subtitle}</h3> }
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader