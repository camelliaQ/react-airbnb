import React, { memo } from 'react'
import footerDate from '@/assets/data/footer_data'
import { FooterWrapper } from './style'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='wrapper'>
        <div className='service'>
          {
            footerDate.map(item => {
              return (
                <div className='item' key={item.name}>
                  <div className='name'>{item.name}</div>
                  <div className='list'>
                    {
                      item.list.map(item => {
                        return (
                          <div className='item-list' key={item}>{item}</div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='statement'>
          © 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter