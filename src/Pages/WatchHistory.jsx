import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getWatchHistory } from '../Services/allAPI';


function WatchHistory() {

const [watchData,setWatchData]=useState([])

  const handleHistory=async()=>{
    //make an api call to fetch data from the server
    const {data}=await getWatchHistory()
      console.log(data);
      setWatchData(data)
    
  }
  console.log(watchData);//array of data
  useEffect(()=>{
  handleHistory()
  },[])
  return (
    <>
<div className='container d-flex justify-content-between align-items-center'>
  <h3 >Watch History</h3>
  <Link to={'/Home'} style={{textDecoration:'none'}}>
  <p>  <i className="fa-solid fa-backward fa-fade m-2"></i> Back To Home</p>

  </Link>
</div>
<div className='container my-5'>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
       {
       watchData? watchData.map(item=>(
         <tr>
          <td>{item.id}</td>
          <td>{item.caption}</td>
          <td><Link to={item.embedLink}>{item.embedLink}</Link></td>
          <td>{item.timestamp}</td>
        </tr>
       )):<p>No data</p>
      
       
       }
      
       
      </tbody>
    </Table>
</div>
    </>
  )
}

export default WatchHistory