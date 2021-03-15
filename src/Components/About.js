import React from 'react'
import headshot from '../Images/headshot.jpg'

function About() {
    return(
        <div>
            <center>
                <img src={headshot} alt='' width='300' ></img>
                <p>An enthusiastic, conscientious, and solution-oriented professional. Recent graduate from the Flatiron School’s Software Engineering Program. Extensive experience in large-scale national and international production and process management. Seeking a work environment that allows employees to thrive and advance in their field as well as a company culture that fosters their employees’ continued growth and development.</p><br></br>
                <p>[Insert Personal Anecdote]</p>
            </center>
        </div>
    )

}

export default About;