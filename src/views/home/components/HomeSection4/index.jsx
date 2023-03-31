import ScrollView from '@/base_ui/ScrollView'
import SectionHeader from '@/components/SectionHeader'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper4 } from './style'

const HomeSection4 = memo(({ infoData={} }) => {
  return (
    <SectionWrapper4>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='wrapper'>
        <ScrollView>
          {
            infoData.list.map(item => (
              <div className='longfor-item' key={item.city}>
                <div className='content'>
                  <img className='cover' src={item.picture_url} alt="" />
                  <div className='info'>
                    <div className='city'>{item.city}</div>
                    <div className='price'>均价 {item.price}</div>
                  </div>
                  <div className='bg'></div>
                </div>
              </div>
            ))
          }
        </ScrollView>
      </div>
    </SectionWrapper4>
  )
})

HomeSection4.propTypes = {
  infoData: PropTypes.object.isRequired,
}

HomeSection4.displayName = 'HomeSection4'

export default HomeSection4