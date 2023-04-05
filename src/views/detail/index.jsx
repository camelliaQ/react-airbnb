import { setHeaderConfig } from '@/store/modules/global'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailContent from './components/DetailContent'
import DetailPictures from './components/DetailPictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderConfig({ isFixed: false }))
  }, [])

  return (
    <DetailWrapper>
      <DetailContent />
      <DetailPictures />
    </DetailWrapper>
  )
})

Detail.displayName = 'Detail'

export default Detail