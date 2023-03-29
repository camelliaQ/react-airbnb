import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

import { LayoutWrapper } from './style'

const Layout = memo(() => {
  return (
    <LayoutWrapper>
      <AppHeader />
      <Suspense fallback={<h1>加载中...</h1>}>
        <Outlet></Outlet>
      </Suspense>
      <AppFooter />
    </LayoutWrapper>
  )
})

Layout.displayName = 'Layout'

export default Layout