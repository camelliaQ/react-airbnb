import React, { memo } from 'react'
import IconLogo from '@/assets/svg/icon_logo'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper className='header-left'>
      <div className='logo'>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

HeaderLeft.displayName = 'HeaderLeft'

export default HeaderLeft