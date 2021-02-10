import React from 'react';
import { Document } from 'react-pdf';
import ResumeImg from '../Images/resume.jpg'

function Resume() {
    return (
        <div>
            <center><img src={ResumeImg} alt='' /></center>
            <Document file='src/Images/resume.pdf' />
        </div>
    )
}

export default Resume;
