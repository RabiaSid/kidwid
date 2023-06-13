import React from 'react'
import AppHeader from '../header'
import AppFooter from '../footer'

function AppLayout({children}) {
  return (
    <>
    <AppHeader />
        {children}
    <AppFooter />
    </>
  )
}

export default AppLayout