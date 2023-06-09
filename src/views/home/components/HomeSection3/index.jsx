import React, { memo } from 'react'
import { SectionWrapper3 } from './style'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/SectionHeader'
import SectionFooter from '@/components/SectionFooter'
import ScrollView from '@/base_ui/ScrollView'
import RoomItem from '@/components/RoomItem'

const HomeSection3 = memo(({ infoData = {} }) => {
  return (
    <SectionWrapper3>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='content'>
        <ScrollView>
          {infoData.list.map((item) => (
            <RoomItem key={item.id} item={item} width='20%' />
          ))}
        </ScrollView>
      </div>
      <SectionFooter name={infoData.type} />
    </SectionWrapper3>
  )
})

HomeSection3.propTypes = {
  infoData: PropTypes.object.isRequired,
}

HomeSection3.displayName = 'HomeSection3'

export default HomeSection3
