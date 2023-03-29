import React, { memo } from 'react'
import HeaderLeft from './components/HeaderLeft'
import HeaderCenter from './components/HeaderCenter'
import HeaderRight from './components/HeaderRight'

import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader