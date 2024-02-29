import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Portfolio2 = () => {
    return (
        <div className='portContainer'>
            <div className='portMain'>
                <button><Link to="../portfolio"><span></span> Back to portfolio</Link></button>
                <div className='row'>
                    <div className='col'>
                        <h1>Redesign of Blockchain Product</h1>
                        <p>Winding Tree has been building decentralized, peer-to-peer and open-source solutions for the travel industry using blockchain technology. Their solutions could help with cutting out pointless fees from the travelling processes and make current industry standarts simple, transparent and up to date.</p>
                        <p>Client: Winding Tree<br/>
                        Role: UX designer
                        </p> 
                    </div>
                    <div className='col'>
                        <img src="src\assets\blockchain1.png" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Problem</h2>
                        <p>Main problem that Winding Tree faced as a new blockchain startup was lack of user friendliness in their product that could bring their business solution to broader line of customers. Their products aims on various smaller and biger players in travel industry, where not everyone is a tech savvy and therefore quality UX and clear communication is a goal to their potential success.</p>
                        <h2>Solution</h2>
                        <p>In order to solve the problem, I started with studying of current state of the product, its technology and users. After this phase, I came up with ideas for improvement, which I later designed and tested. We used the improvements that passed the test in the new design solution with a simplified user flow that passed test of their users as was chosen as a better solution by most of them.</p>
                    </div>
                    <div className='col'>
                        <img src="src\assets\fashion2.png" className='secondPic'/>
                    </div>
                </div>
                <div className='row'> 
                    <div className='col'>
                        <img src="src\assets\blockchain3.png" />
                    </div>
                    <div className='col'>
                        <h2>Interviews & User Tests</h2>
                        <p>During discovery phase, I have held a serie of interviews with a couple of users from the industry has been chosen and been given a few tasks that they must accomplish. These tasks were signing up, creating new organization, creating new business unit, staking of our token, editing their profile and finding other companies using our product. Users were never interrupted and after finishing of all tasks, interview was held to gain some feedback about their experience. User interviews also continued later in the process after every usability test that has been done and the feedback from each interview has been used as a valid point for next design round. We had trhee iterations in total.</p>
                        <h2>Personas</h2>
                        <p>We wanted to form a deeper understanding of our users' business goals, needs, experiences and behaviors. So, we created five personas for each of our user segments. They were based on user interviews and surveys, and we kept updating them throughout the project as we gathered more data. We used these personas whenever we wanted to step out of ourselves and reconsider our initial ideas.
                        Therefore I had to go thru whole process once again and simplify some features to fulfill their wish and then run one more test session where I tested if users can still navigate themselves thru the app. </p>
                    </div>
                </div>
                <div className='row'>    
                    <div className='col'>
                        <h2>Card Sorting & Information Architecture</h2>
                        <p>To make sure and have a supporting findings to our vision of new information architecture, we held a card sorting session using Useberry. Our goal was to find smaller, intuitive groupings for following terms, Decentralized Autonomous Organization, Directories, Trust, Organization Profile, Create new organization, Staking Líf (our token) and Competitor’s Organizations. After organizing the data, we ended up with four clearly defined categories, based on our findings from this card sorting session.</p>
                        <h2>Wireframes</h2>
                        <p>Using pencil and paper, I translated my first sketches into physical wireframes and later turned them into low-fidelity digital wireframes using Adobe XD. Then, I improved them by adding a few relevant stock images and icons provided by the company. At this stage, the wireframes were defined enough to do user testing. Based on two test sessions, I’ve made a few alternations and moved on to creating final wireframes with more details to them.</p>
                    </div> 
                    <div className='col'>
                        <img src="src\assets\blockchain4.png" />
                    </div>              
                </div>
                <div className='row'>  
                    <div className='col'>
                        <img src="src\assets\blockchain5.png" />
                    </div>    
                    <div className='col'>
                        <h2>Usability Testing</h2>
                        <p>In our user test sessions, we have also introduced heat map functionality in to the process, that helped me with later analysis of weak points where users were getting lost or were distracted by other elements to perform chosen tasks. Thanks to this functionality we discovered some weak spots earlier in the process.</p>
                        <p>During final usability test all test subjects passed all tasks without any major issues and in parts that were already in original testing they performed even faster than in first test session and described new design solution as simplified and easy to understand.</p>
                        <h2>Learning</h2>
                        <p>We have found out that the design process and methodologies that I have chosen have been successful, however I made a mistake in early phase while ideating first version of new information architecture, but card sorting method and series of inverviews helped me to fix it later on a come up with a new hypotesis that later evolved into functional solution.
                        Besides this, no bigger problems have been occurred along the way and our final goals has been fulfilled maybe even beyond expected level, before project closure. I had a session with Winding Tree where I presented them all my findings and gave them some relevant feedback that I have collected from the users including UX and also other areas.</p>
                    </div>             
                </div>
                <h2 className='projects'>More projects</h2>
                <div className='row'>
                    <div className='col previous'>
                        <Link to="/portfolio1">
                            <img src="src\assets\fashion1.png" />
                        </Link>
                    </div>
                    <div className='col next'>
                        <Link to="/portfolio3">
                            <img src="src\assets\mallari1.png" />
                        </Link>
                    </div>
                        
                </div>                
            </div>
        </div>
    )
}

export default Portfolio2;