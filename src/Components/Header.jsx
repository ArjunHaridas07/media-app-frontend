import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='warning'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='fw-bolder fs-4 text-black'>
          <i class="fa-solid fa-cloud-arrow-up fa-shake m-3 fs-3 text-black"></i>
            Media Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header