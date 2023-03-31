import SectionFooter from '@/components/SectionFooter'
import SectionHeader from '@/components/SectionHeader'
// import SectionRooms from '@/components/SectionRooms'
import React, { memo } from 'react'
import PropType from 'prop-types'
import { SectionWrapper } from './style'
import SectionList from '@/components/SectionList'

const HomeSection = memo(({ infoData = {} }) => {
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionList list={infoData.list} width='25%' />
      <SectionFooter />
    </SectionWrapper>
  )
})

HomeSection.PropType = {
  infoData: PropType.object.isRequired
}

HomeSection.displayName = 'HomeSection'

export default HomeSection