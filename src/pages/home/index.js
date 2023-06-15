import React from 'react'
import baseColors from '@/constant'
import HomeSectionone from '@/Section/home-section-1'
import HomeSectionTwo from '@/Section/home-section-2'
import HomeSectionThree from '@/Section/home-section-3'
import HomeSectionFour from '@/Section/home-section-4'
import HomeSectionFive from '@/Section/home-section-5'
import HomeSectionSix from '@/Section/home-section-6'
import HomeSectionSeven from '@/Section/home-section-7'
import HomeSectionEight from '@/Section/home-section-8'
import HomeSectionNine from '@/Section/home-section-9'
import HomeSectionTen from '@/Section/home-section-10'


function AppHome() {
  return (
    <div className='m-0 p-0' style={{background:baseColors.backgroundLight}}>
    <HomeSectionone />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeSectionFour />
    <HomeSectionFive />
    <HomeSectionSix />
    <HomeSectionSeven />
    <HomeSectionEight />
    <HomeSectionNine />
    <HomeSectionTen />
    </div>
  )
}

export default AppHome