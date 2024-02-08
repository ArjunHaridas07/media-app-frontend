import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


function Home() {
  //state creation

  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})

  return (
    <div>

      <Row>
   {/* first div */}
   <Row className='container d-flex align-items-center justify-content-between'>
        <Col  className='add-videos'>
         <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </Col>
      </Row>
   
        <Link to={'/watch-history'} style={{textDecoration:'none'}}> Watch History</Link>
{/* second div */}
      <Col  className='container-fluid d-flex  justify-content-between'>
        <div className='all-videos'>
          <h3 className='text-center my-4'>All Videos</h3>
         <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </div>
        <Col  style={{width:'800px',padding:'10px'}}>
          <Category/>
        </Col>
      </Col>
      </Row>

    </div>
  )
}

export default Home