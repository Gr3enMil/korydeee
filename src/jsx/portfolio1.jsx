import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Portfolio1 = () => {
    return (
        <div className='portContainer'>
            <div className='portMain'>
                <button><Link to="../portfolio"><span></span> Back to portfolio</Link></button>
                <div className='row'>
                    <div className='col'>
                        <h1>Design of Model Hiring App</h1>
                        <p>My client for this project was a startup company trying to come up with a business solution to connect fashion models with agencies and event managers. They had very clear business vision and just needed a designer that could articulate their ideas into a final product and help them with shaping some of their functionalities to perfection.</p>
                        <p>Client: Random<br/>
                        Role: Product designer<br/>
                        Year: 2021</p> 
                    </div>
                    <div className='col'>
                        <img src="src\assets\fashion1.png" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Problem</h2>
                        <p>The main problem from the starts was client's lack of experience in a field and bad luck when finding their first agency. The UX and UI delivery that they have received from the agency was nowhere close to what they wanted and that's one of the reasons why the kept searching for a new designer until they found me.</p>
                        <h2>Solution</h2>
                        <p>After our agreenment on collaboration, we took a step back and started right from the scratch rather then continuing with original logic of the app. The discovery phase was all about explaining me their business idea, analysing current competitors and their design solutions and its problems. After that, we came up with interviewing potential users and started prototyping phase enriched with series of A/B tests and user tests. After delivery of final prototype, I helped client with further support and negotiations with developers.</p>
                    </div>
                    <div className='col'>
                        <img src="src\assets\fashion2.png" className='secondPic'/>
                    </div>
                </div>
                <div className='row'> 
                    <div className='col'>
                        <img src="src\assets\fashion3.png" />
                    </div>
                    <div className='col'>
                        <h2>Design and Testing</h2>
                        <p>Using Adobe XD, I translated my first sketches, wireframes and user flows into high-fidelity prototype. Then, I improved them by adding a few relevant stock images and relevant titles. At this stage, the product was defined enough for some user testing. After succesful a round of user tests with three people from the industry. We were satisfied with state of out product.</p>
                        <h2>Prototype</h2>
                        <p>After a few interactions with various agencies. Client have decided to create a simplified lighter variant (MVP) that would be focusing only on primary functionalities and features that bring the most of added value to cut out development costs by not developing secondary features that would be too expensive for early stage of the project.
                        Therefore I had to go thru whole process once again and simplify some features to fulfill their wish and then run one more test session where I tested if users can still navigate themselves thru the app. </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <img src="src\assets\fashion4-1.png" />
                    </div>     
                    <div className='col'>
                        <img src="src\assets\fashion4-2.png" />
                    </div>                 
                </div>
                <h2 className='projects'>More projects</h2>
                <div className='row'>
                    <div className='col previous'>
                        <Link to="/portfolio6">
                            <img src="src\assets\fashion1.png" />
                        </Link>
                    </div>
                    <div className='col next'>
                        <Link to="/portfolio2">
                            <img src="src\assets\blockchain1.png" />
                        </Link>
                    </div>
                        
                </div>                
            </div>
        </div>
    )
}

export default Portfolio1;