import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategories, deleteCategory, getAVideo, getCategories, updateCategory } from '../Services/allAPI';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col';
import VideoCard from './VedioCard'



function Category() {
  //to hold ctegry name from the form

const[categoryName,setCategoryName]=useState('')

//to hold catergory details(including name and id)

const[categoryDetails,setCategoryDetails]=useState('');


console.log(categoryName);
//add category
const handleAddCategory=async()=>{

  const body={
    categoryName
  }
  //to make api call
  if(categoryName){
    const response=await addCategories(body)
    console.log(response);
    toast.success("Category added succesfully!")
    getCategory()
    setCategoryName('')
    handleClose()
  }
  else{
    toast.error('Please enter a category name')
  }

}

//get categories
const getCategory=async()=>{
  const {data}= await getCategories()
  console.log(data);
  setCategoryDetails(data)

}
console.log(categoryDetails);
useEffect(()=>{
  getCategory()
},[])

//delete catergory

const removeCategory = async (id) => {
  //api call to delete category
  await deleteCategory(id)
  getCategory()
  toast.error("Deleted Successfully!!")
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const dragOver=(e)=>{
  console.log("video drag over");
  e.preventDefault()
}

const videoDrop = async (e, categoryId) => {
  console.log("video dropped" + categoryId);
  const videoId = e.dataTransfer.getData("videoId");
  console.log(videoId);

  //api call to fetch video data
  const { data } = await getAVideo(videoId);
  console.log(data);

  //get category details
  const selectCategory = categoryDetails.find((item) => item.id === categoryId);
  console.log(selectCategory);

  // Initialize allvideos as an empty array if undefined
  selectCategory.allvideos = selectCategory.allvideos || [];

  //add video details into the array {allvideos[]}
  selectCategory.allvideos.push(data);
  console.log(selectCategory);

  //make an API call to update category details
  await updateCategory(categoryId, selectCategory);
  getCategory();
};



  return (
    <>
      <div>
      <button onClick={handleShow} className='btn'>Add New Category</button>
    </div>

    <div>
        {
          categoryDetails.length > 0 ? categoryDetails.map(item => (
            <div onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)} className='my-3 p-3' style={{ border: '1px dashed muted' }}>
              <div className='d-flex justify-content-between'>
                <h5>{item.categoryName}</h5>
                <button onClick={() => { removeCategory(item.id) }} className='btn'>
                  <i className='fa-solid fa-trash text-danger'></i>
                </button>
              </div> 
           <Row>
            {
              item.allvideos && item.allvideos.map(data=>(
                <Col>
                <VideoCard displayData={data} insideCategory={true}/>
                </Col>
              ))
            }
           </Row>


            </div>
          )) : <p>No Data</p>
        }
      </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form>
         
      <FloatingLabel controlId="floatingPassword" label="Category Name">
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
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
    </>
    
  )
}

export default Category