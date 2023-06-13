import HomeSectionone from '@/Section/home-section-1'
import HomeSectionTwo from '@/Section/home-section-2'
import HomeSectionThree from '@/Section/home-section-3'
import baseColors from '@/constant'
import React from 'react'

function AppHome() {
  return (
    <div className='m-0 p-0' style={{background:baseColors.backgroundLight}}>
    <HomeSectionone />
    <HomeSectionTwo />
    <HomeSectionThree />
    </div>
  )
}

export default AppHome