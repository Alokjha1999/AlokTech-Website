import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';

import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    
    {
        id: 1,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: ' Embark on a journey into the world of business with our comprehensive Business Course. From foundational principles to advanced strategies!'
    },
    {
        id: 2,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: ' Delve into the exciting realm of Computer Science with our specialized course. software development!'
    },
    {
        id: 3,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'Prepare for a fulfilling career in education with our Education Course!'
    },
    {
        id: 4,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: 'Make a difference in the healthcare industry with our Healthcare Course!'
    },
    
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: ' Unleash your musical potential with our dynamic Music Course.!'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: ' Take your passion for sports to the next level with our Sport Course.!'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'> Explore our diverse range of courses designed to cater to your interests and aspirations !!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;