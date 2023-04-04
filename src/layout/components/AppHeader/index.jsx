import React, { memo } from 'react'
import HeaderLeft from './components/HeaderLeft'
import HeaderCenter from './components/HeaderCenter'
import HeaderRight from './components/HeaderRight'
import { HeaderWrapper } from './style'
import classNames from 'classnames'
import { shallowEqual, useSelector } from 'react-redux'

const AppHeader = memo(() => {
  const { isFixed } = useSelector(
    ({ global }) => global.headerConfig,
    shallowEqual
  )

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader