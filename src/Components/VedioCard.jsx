import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToWatchHistory, delAVideo } from '../Services/allAPI';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function VedioCard({ displayData, setDeleteVideoStatus,insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    //api call to add watch history

    const { caption, embedLink } = displayData
    //to get date and time
    let today = new Date();
    let timestamp=new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',
  day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);
  console.log(timestamp);

  let videoDetails={
    caption,
    embedLink,
    timestamp
  }
  //api call to get video details
await addToWatchHistory(videoDetails)
  }
  console.log(displayData);

  //remove video
  const removeVideo = async (id) => {
    const response =await delAVideo(id)
    setDeleteVideoStatus(true)
    toast.error("Deleted Successfully!!")
    console.log(response);
  }
  const dragStarted=(e,id)=>{
console.log("drag started",+id,e);
e.dataTransfer.setData("videoId",id)
  }


  return (
    <div>
      <Row>
        <Col className=' d-flex'>

          <Card draggable onDragStart={(e)=>dragStarted(e,displayData.id)} style={{ width: '400px',height:'300px',margin:'5px' }} className='p-3'>
            <Card.Img style={{ height: '200px' }} onClick={handleShow} variant="top" src={displayData.url} />
            <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-20px' }}>
              <Card.Title className='mt-2'>{displayData.caption}</Card.Title>
             {insideCategory?"":<button onClick={() => { removeVideo(displayData.id) }} className='btn'><i className='fa-solid fa-trash text-dark'></i></button>}

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={displayData.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
       
      </Modal>

    </div>

  )
}

export default VedioCard