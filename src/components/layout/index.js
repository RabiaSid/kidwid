import React from 'react'
import AppHeader from '../header'
import AppFooter from '../footer'

function AppLayout({children}) {
  return (
    <>
    <AppHeader />
        <h1>AppLayout</h1>
        {children}
    <AppFooter />
    </>
  )
}

export default AppLayout