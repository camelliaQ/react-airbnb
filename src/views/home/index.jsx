import { getHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Skeleton } from 'antd'
import HomeBanner from './components/HomeBanner'
import HomeSection from './components/HomeSection'
import HomeSection2 from './components/HomeSection2'
import HomeSection3 from './components/HomeSection3'
import { HomeWrapper } from './style'
import HomeSection4 from './components/HomeSection4'

const Home = memo(() => {
  const { goodInfo, highInfo, hotInfo, discountInfo, longforInfo, plusInfo, isLoading } = useSelector(
    ({ home }) => home,
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <Skeleton className='skeleton' loading={isLoading} active paragraph={{ rows: 8 }}>
          {/* 折扣房源 */}
          <HomeSection2 infoData={discountInfo} />
          {/* 热门房源 */}
          <HomeSection2 infoData={hotInfo} />
          {/* 你可能想去 */}
          <HomeSection4 infoData={longforInfo} />
          {/* 高性价比房源 */}
          <HomeSection infoData={goodInfo} />
          {/* 高分好评房源 */}
          <HomeSection infoData={highInfo} />
          {/* plus房源 */}
          <HomeSection3 infoData={plusInfo} />
        </Skeleton>
      </div>
    </HomeWrapper>
  )
})

Home.displayName = 'Home'

export default Home
