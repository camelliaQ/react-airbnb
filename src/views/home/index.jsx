import React, { memo } from 'react'
import HomeBanner from './components/HomeBanner'
import HomeSection from './components/HomeSection'
import HomeSection2 from './components/HomeSection2'
import { HomeWrapper } from './style'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner>
        <div className="content">
          {/* 折扣房源 */}
          <HomeSection2 />
          {/* 热门房源 */}
          <HomeSection2 />
          {/* 高性价比房源 */}
          <HomeSection />
          {/* 高分好评房源 */}
          <HomeSection />
        </div>
      </HomeBanner>
    </HomeWrapper>
  )
})

Home.displayName = 'Home'

export default Home
