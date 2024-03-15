import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() { 
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>FAQ</h2>
            <p className='text-center mb-5'>Feel free to Ask !!!!</p>
            <Accordion defaultActiveKey="" flush>
    <Accordion.Item eventKey='0'>
        <Accordion.Header>What are the available courses?</Accordion.Header>
        <Accordion.Body>
            We offer a variety of courses covering subjects such as programming, design, business, marketing, and more. 
            You can explore our course catalog to see the full list of available options.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>How do I enroll in a course?</Accordion.Header>
        <Accordion.Body>
            To enroll in a course, simply navigate to the course page and click on the "Enroll Now" button. 
            Follow the prompts to complete the enrollment process, and you'll gain access to the course materials.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>What is the duration of each course?</Accordion.Header>
        <Accordion.Body>
            The duration of each course varies depending on the subject and complexity. 
            Some courses may last for a few weeks, while others may span several months. 
            You can find detailed information about the duration of each course on the course page.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='3'>
        <Accordion.Header>Are there any prerequisites for the courses?</Accordion.Header>
        <Accordion.Body>
            Prerequisites vary depending on the course. Some courses may have specific requirements, 
            such as prior knowledge of certain programming languages or familiarity with certain concepts. 
            You can find detailed information about prerequisites on the course page.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='4'>
        <Accordion.Header>How can I access course materials?</Accordion.Header>
        <Accordion.Body>
            Once you enroll in a course, you'll gain access to the course materials through our online learning platform. 
            You can access the materials at any time from any device with an internet connection.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>

        </div>
    </div>
  )
}

export default FaqAccordion;