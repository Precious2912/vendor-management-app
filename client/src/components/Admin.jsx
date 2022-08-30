import React, { useState } from 'react'
import { VendorStyle } from '../styles/VendorStyle';
import FilterToggle from './FilterToggle';
import Header from './Header';
// import { vendorStyle  } from '../styles/VendorStyle'

export const Admin = ({vendor, user, comment}) => {

  return (
    <>
    <Header admin/>
    <FilterToggle admin/>
    {vendor ? (
      <>
      <VendorStyle>

      </VendorStyle>
      </>
    )
    
    : user ? 
    (
      <>
      <h1>User</h1>
      </>
    )
    : comment ?
    (
      <>
      <h1>Comment</h1>
      </>
    )
    : ""
    }
    </>
  )
}
