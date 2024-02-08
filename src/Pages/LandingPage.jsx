import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

function LandingPage() {

  const navigate=useNavigate()

  return (
    <div>
      {/* first row */}
      <Row>
        <Col>
          {/* content */}
          <h1 className='text-black m-4 ps-4'>Welcome to <span className='text-warning'>Media Player</span> </h1>
          <p style={{ textAlign: "justify", lineHeight: '30px' }} className='mt-4 m-4 ps-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas accusantium maiores libero optio voluptates neque molestias obcaecati at excepturi. Blanditiis aliquid similique rerum labore nam qui omnis deserunt voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi deleniti numquam velit.
            Iste expedita animi maiores magnam sequi aspernatur atque modi est! Explicabo eligendi facere accusamus ea saepe ex?</p>
          <button onClick={()=>navigate('/home')} className='btn m-4 ms-5'>Get Started</button>
        </Col>
        <Col>
          {/* image */}
          <img src="https://i.pinimg.com/originals/e4/63/4d/e4634da841c0ed906e77cab9b6b733ef.gif" alt="" style={{ height: '410px', marginLeft: '50px' }} />
        </Col>
        <h2 className='text-center  text-black mt-5 p-4'>Features</h2>
      </Row>
      {/* second row */}
      <Row className='m-4'>
        <Col style={{ marginLeft: '100px', }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cutewallpaper.org/21/music-equalizer-gif/Equalizer-by-Alexander-Stets-on-Dribbble.gif" />
            <Card.Body>
              <Card.Title className='text-dark'>Managing Vedios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://s18798.pcdn.co/fenfenrita/wp-content/uploads/sites/11995/2018/10/Oct-31-2018-03-13-31.gif" />
            <Card.Body>
              <Card.Title className='text-dark'>Categories Vedios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/60/a6/37/60a6370c7eb20418d83e930fd3dc19d7.gif" />
            <Card.Body>
              <Card.Title className='text-dark'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      {/* third row */}
      <Row >
        <Col>
          {/* content */}
          <h2 className=' ms-5 my-5'>Simple, Fast and Powerful</h2>
          <h4 className='ms-5'>Play Everything</h4>
          <p className='ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum quam eveniet optio, incidunt ipsam illo corporis magnam corrupti animi vel impedit non error minus harum provident dolores repellendus. Quisquam.</p>
          <h4 className='ms-5'>Categorise Vedios</h4>
          <p className='ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum quam eveniet optio, incidunt ipsam illo corporis magnam corrupti animi vel impedit non error minus harum provident dolores repellendus. Quisquam.</p>
          <h4 className='ms-5'>Managing History</h4>
          <p className='ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum quam eveniet optio, incidunt ipsam illo corporis magnam corrupti animi vel impedit non error minus harum provident dolores repellendus. Quisquam.</p>



        </Col>
        <Col>
          {/* youtube vedio */}
          <iframe style={{marginTop:'80px'}} width="560" height="400"  src="https://www.youtube.com/embed/1G4isv_Fylg?si=XjSbQCdYJ_JbIx99" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage