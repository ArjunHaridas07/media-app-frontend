import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {

  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embedLink: ""
  })
  console.log(video);
  const getEmbedLink=(e)=>{
    const {value}=e.target
    console.log(value.slice(-31));
    const link=`https://www.youtube.com/embed/${value.slice(-31)}`
    setVideo({...video,embedLink:link})
  }

  const handleUpload=async()=>{//to upload a vedio
    const{id,caption,url,embedLink}=video
    if(!id||!caption||!url||!embedLink){
      toast.error("Please fill this form");
    }
    else{
//make an api call
const response=await uploadVideo(video)
console.log(response);
if(response.status>=200 && response.status<=300){
  //set server response
  setUploadVideoServerResponse(response.data);
  toast.success(`${response.data.caption} added successfully`);
  setVideo({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  handleClose()
}
else{
  toast.warning("please provide a unique Id")
}
    }

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container d-flex mt-5">
        <h4>Upload New Video</h4>
        <button onClick={handleShow} style={{ marginTop: '-10px' }} className='btn'><i class="fa-solid fa-circle-plus fs-5"></i></button>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please fill the following details..</p>
            <form className=' p-4 rounded'>


              <FloatingLabel label="Vedio Id" className="mb-2">
                <Form.Control
                  onChange={(e) => setVideo({ ...video, id: e.target.value })}
                  type="text" placeholder="Video Id" />
              </FloatingLabel>


              <FloatingLabel label="Video Caption" className="mb-2">
                <Form.Control
                  onChange={(e) => setVideo({ ...video, caption: e.target.value })}
                  type="text" placeholder="Video Caption" />
              </FloatingLabel>


              <FloatingLabel label="Video Image URL" className="mb-2">
                <Form.Control
                  onChange={(e) => setVideo({ ...video, url: e.target.value })}
                  type="text" placeholder="Video Image URL" />
              </FloatingLabel>


              <FloatingLabel label="Youtube Link" className="mb-2">
                <Form.Control
                onChange={getEmbedLink}
                  type="text" placeholder="Youtube Link" />
              </FloatingLabel>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload} variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Add