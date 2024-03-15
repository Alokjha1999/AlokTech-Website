import React from 'react';
import { Card } from 'react-bootstrap';

function TestimonialsSection() {
  return (
    <div className="container">
        <h2 className='text-center mb-5'>Student Testimonials</h2>
        <div className='row g-4'>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <Card.Body>
                        <Card.Text className='text-center'>
                            "Alok Tech has provided me with the skills and knowledge I needed to excel in my career. The instructors are knowledgeable and supportive, and the curriculum is comprehensive. I highly recommend their courses."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <Card.Body>
                        <Card.Text className='text-center'>
                            "The courses at Alok Tech exceeded my expectations. The hands-on learning approach and practical projects helped me develop real-world skills that are valuable in the job market. I'm grateful for the opportunity to learn from such talented instructors."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <Card.Body>
                        <Card.Text className='text-center'>
                            "Enrolling in Alok Tech was one of the best decisions I've made for my education. The courses are well-structured, and the instructors are passionate about teaching. I've gained confidence in my abilities and am ready to pursue my career goals."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsSection;
