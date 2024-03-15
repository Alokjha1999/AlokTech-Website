import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

// Dummy list of courses
const courses = [
    {
        id: 1,
        title: "Introduction to Programming",
        description: "Learn the basics of programming with this introductory course.",
        image: "https://i.pinimg.com/736x/ec/29/74/ec2974b3e78fcbb2600af2e61c3c7b8d.jpg"
    },
    {
        id: 2,
        title: "Web Development",
        description: "Master the art of building websites with our comprehensive web development course.",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"
    },
    {
        id: 3,
        title: "Data Science Fundamentals",
        description: "Unlock the power of data with our data science fundamentals course.",
        image: "https://data-flair.training/wp-content/uploads/2024/01/free-data-science-certification-course-thumbnail-hindi-4.webp"
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Build your own mobile apps for iOS and Android platforms with this course.",
        image: "https://media.geeksforgeeks.org/img-practice/prod/courses/1699342871/Web/Content/ios-app-development-thumbnail-old.png"
    },
    {
        id: 5,
        title: "Graphic Design",
        description: "Express your creativity through digital art with our graphic design course.",
        image: "https://fiverr-res.cloudinary.com/videos/so_1.83573,t_main1,q_auto,f_auto/ec2ncjwaeekhpimn8wx9/make-any-graphic-design-you-need.png"
    },
    {
        id: 6,
        title: "Digital Marketing",
        description: "Learn to market products or services using digital technologies and platforms.",
        image: "https://fueler.io/storage/users/timeline_image/1659279686-jy2p84ykvimsekzsjsx3.png"
    }
];


function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Story</h1>
                <p className='text-center w-75 mb-5'>Discover the journey of our team and the passion that drives us.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Explore Our Courses</h2>
                    <p>Embark on a journey of knowledge and growth with our diverse range of courses!!</p>
                    <p className='mb-4 mb-lg-5'>Explore our diverse range of courses and embark on a journey of knowledge and growth. Our courses cater to various interests and provide a rich learning experience. Discover the joy of learning with us and take the first step towards achieving your educational goals. Contact us for more information or to enroll in our exciting courses</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='container my-5'>
            <h2 className='text-center mb-5'>Featured Courses</h2>
            <div className='row'>
                {courses.map(course => (
                    <div key={course.id} className='col-md-4'>
                        <div className="card mb-4">
                            <img src={course.image} className="card-img-top" alt={course.title} />
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                                <Link to={`/courses/${course.id}`} className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default About;
