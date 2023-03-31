import SectionFooter from '@/components/SectionFooter'
import SectionHeader from '@/components/SectionHeader'
import SectionList from '@/components/SectionList'
import SectionTabs from '@/components/SectionTabs'
import React, { memo, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionWrapper2 } from './style'

const HomeSection2 = memo(({ infoData={} }) => {
  const [name, setName] = useState(infoData.dest_address[0].name)

  // 处理tabs需要的数据 =>  ['佛山', '北京', '长沙']
  const tabList = useMemo(() => infoData.dest_address.map((item) => item.name), [infoData])

  const tabChange = useCallback(i => { setName(tabList[i]) }, [tabList])

  return (
    <SectionWrapper2>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabList={tabList} tabChange={tabChange} />
      <SectionList list={infoData.dest_list[name]} width='33.33%' />
      <SectionFooter name={name} />
    </SectionWrapper2>
  )
})

HomeSection2.propTypes = {
  infoData: PropTypes.object.isRequired
}

HomeSection2.displayName = 'HomeSection2'

export default HomeSection2