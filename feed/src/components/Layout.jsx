import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <Fragment>
        <Header/>
        <main className='App'>
            <Outlet/>
        </main>
    </Fragment>
  )
}
