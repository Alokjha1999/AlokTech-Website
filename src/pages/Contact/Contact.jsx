import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PatnaLocationImg from '../../utils/images/Patna-location.jpg';
import BangloreLocationImg from '../../utils/images/Banglore-location.jpg';
import DelhiLocationImg from '../../utils/images/Delhi-location.jpg';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Contact us</h1>
                <p className='text-center w-75 mb-5'>Have questions or feedback? We'd love to hear from you!!</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='Your address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Location</Form.Label>
                        <Form.Select defaultValue="London">
                            <option>Patna</option>
                            <option>Banglore</option>
                            <option>Delhi</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control placeholder='Postcode' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Locations</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={PatnaLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Patna</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={BangloreLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Banglore</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={DelhiLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Delhi</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;