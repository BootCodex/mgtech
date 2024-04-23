import React from 'react';
import { Navbar } from '../components';

function MainLayout({children}) {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout