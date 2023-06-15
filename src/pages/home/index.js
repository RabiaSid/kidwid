import HomeSectionone from '@/Section/home-section-1'
import HomeSectionTen from '@/Section/home-section-10'
import HomeSectionTwo from '@/Section/home-section-2'
import HomeSectionThree from '@/Section/home-section-3'
import HomeSectionFour from '@/Section/home-section-4'
import HomeSectionFive from '@/Section/home-section-5'
import HomeSectionSix from '@/Section/home-section-6'
import HomeSectionEight from '@/Section/home-section-8'
import baseColors from '@/constant'
import React from 'react'

function AppHome() {
  return (
    <div className='m-0 p-0' style={{background:baseColors.backgroundLight}}>
    <HomeSectionone />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeSectionFour />
    <HomeSectionFive />
    <HomeSectionSix />
    <HomeSectionEight />
    <HomeSectionTen />
    </div>
  )
}

export default AppHome