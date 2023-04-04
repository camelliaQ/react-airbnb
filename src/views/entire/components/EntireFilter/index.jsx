import React, { memo, useState } from 'react'
import filterData from '@/assets/data/filter_data'
import classNames from 'classnames'
import { FilterWrapper } from './style'


const EntireFilter = memo((props) => {
  // set数据结构  ->  唯一数据列
  const [keys, setKeys] = useState([])

  // 交互逻辑:  点击激活 再次点击取消激活
  const addKey = (key) => {
    const n_keys = keys.slice()
    // 如果存在就删除
    const index = n_keys.indexOf(key)
    if (index !== -1) {
      n_keys.splice(index, 1)
    } else {
      n_keys.push(key)
    }
    setKeys(n_keys)
  }

  return (
    <FilterWrapper>
      {
        filterData.map(item => (
          <div key={item} className={classNames('item', {active: keys.includes(item)})} onClick={() => addKey(item)}>
            {item}
          </div>
        ))
      }
    </FilterWrapper>
  )
})

EntireFilter.displayName = 'EntireFilter'

export default EntireFilter