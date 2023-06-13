import React from 'react'
import AppHeader from '../header'
import AppFooter from '../footer'

function AppLayout({children}) {
  return (
    <>
    <AppHeader className='m-0 p-0' />
        {children}
    <AppFooter />
    </>
  )
}

export default AppLayout