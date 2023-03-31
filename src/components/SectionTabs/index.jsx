import ScrollView from '@/base_ui/ScrollView'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo(({ tabList = [], tabChange }) => {
  const [current, setCurrent] = useState(0)

  const changeCurrent = (index) => {
    setCurrent(index)
    tabChange && tabChange(index)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabList.map((item, index) => (
          <div key={item} className={classNames('item', { active: index === current })} onClick={() => changeCurrent(index)}>
            {item}
          </div>
        ))}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.displayName = 'SectionTabs'

SectionTabs.propTypes = {
  tabList: PropTypes.array.isRequired,
  tabChange: PropTypes.func
}

export default SectionTabs
