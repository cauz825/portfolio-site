import React from 'react';
// import { Document } from 'react-pdf'
import ResumeImg from '../Images/resume.jpg';
// import ResumePdf from '../Images/resume.pdf'

function Resume() {
    return (
        <div>
            <center><img src={ResumeImg} alt='' /></center>
            {/* <center><Document file={ResumePdf} onLoadError={console.error} /></center> */}
        </div>
    )
}

export default Resume;
