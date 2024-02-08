import React, { useEffect, useState } from 'react'
import VedioCard from '../Components/VedioCard'
import { getAllVideos } from '../Services/allAPI'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


function View({uploadVideoServerResponse}) {
  
  const[allVideo,setAllVideo]=useState([])

  const[deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  //api call for displaying video cards
  const getUploadedVideos=async()=>{
    const {data}= await getAllVideos()//all uploaded videos
    console.log(data);//array of data'
    setAllVideo(data)
  }
  console.log(allVideo);
  useEffect(()=>{
    getUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])

  return (
    <>
      <Row>
  {allVideo && allVideo.length > 0 ? (
    allVideo.map((video) => (
      <Col sm={12} md={6} lg={4} xl={3}>
        <VedioCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
      </Col>
    ))
  ) : (
    <p>NO Data</p>
  )}
</Row>
    </>
  )
}

export default View