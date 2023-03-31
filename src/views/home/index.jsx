import { getHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './components/HomeBanner'
import HomeSection from './components/HomeSection'
import HomeSection2 from './components/HomeSection2'
import HomeSection3 from './components/HomeSection3'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const { goodInfo, highInfo, htoInfo, discountInfo, plusInfo } = useSelector(({ home }) => home, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
        <div className="content">
          {/* 折扣房源 */}
          <HomeSection2 infoData={discountInfo} />
          {/* 热门房源 */}
          <HomeSection2 infoData={htoInfo} />
          {/* 高性价比房源 */}
          {goodInfo.title && <HomeSection infoData={goodInfo} />}
          {/* 高分好评房源 */}
          {highInfo.title && <HomeSection infoData={highInfo} />}
          {/* plus房源 */}
          <HomeSection3 infoData={plusInfo} />
        </div>
    </HomeWrapper>
  )
})

Home.displayName = 'Home'

export default Home
