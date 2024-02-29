import React from 'react';
import {Link} from "react-router-dom";

const Portfolio3 = () => {
    return (
        <div className='portContainer'>
            <div className='portMain'>
                <button><Link to="../portfolio"><span></span> Back to portfolio</Link></button>
                <div className='row'>
                    <div className='col'>
                        <h1>Mallarisun website design</h1>
                        <p>The story about how we connected company and its goals with clear web design, communication and customer needs.</p>
                        <p>My client reached out to me with a need for a functional responsive website that would help them with clear communication that they are number one on the market, build a trust, educate about the topic and get potential client's contact.</p>
                        <p>Client: Random<br/>
                        Role: Product designer                        </p> 
                    </div>
                    <div className='col'>
                        <img src="src\assets\mallari1.png" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Problem</h2>
                        <p>Currently there is a large amount of competition when it comes to providing photovoltaic power plants and heat pumps in the central European region. It's hard to stand out, as each company has at least some website and most of them provide a similar service. Unfortunately, not everyone is at the top level and customer can easily end up with a bad offer and bad quality service.</p>
                        <h2>Solution</h2>
                        <p>After analysing current state of the market and my client's needs, we came up with our solution. We have to create easy mobile first responsive web presentation that will stand out with it's clear design, aims at out target audience and educate them with valuable information and present our services in a way that builds trust and has an easy process to get contact information from potential customers.</p>
                    </div>
                    <div className='col'>
                        <img src="src\assets\fashion2.png" className='secondPic'/>
                    </div>
                </div>
                <div className='row'> 
                    <div className='col'>
                        <img src="src\assets\mallari3-1.png" />
                    </div>
                    <div className='col'>
                        <h2>Journey to our contact form</h2>
                        <p>With the business goal in mind, we make sure that our users reach our contact form without any hiccups. So, we sketched a solution where most pages lead to it in two possible ways, the first essential way is thru the button in the menu, and secondary way is usually by form being directly placed on the end of various pages.<br />
                        This design serves our purpose to get their contact any time they may seek further help or assistance. Putting form button into menu is also a great visual representation. It basically informs our users about our form within a second after entering the website.<br />
                        For summary, 87% of main pages currently contain secondary way to reach contact form, and that is by displaying it directly, and as mentioned, 100% of pages contain at least one way to reach contact form thru the button in the menu.
                        </p>
                  </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Building trust</h2>
                        <p>Due to the larger investments that are common in this sector and the high competition, we wanted to offer our potential customers a sense of security, trust and confidence that they can work with us without any worries, because we have a lot of experience and will take a good care of their investment, besides reaching this just by clean and representative visual design. We also wanted to reach this goal by developing a structure of the website that would get them to About us page or to one of our success stories pages as fast as possible. Main added value of our success stories is that they present our successfully completed projects and thus let our work speak for us.</p>
                        <h2>Learnings</h2>
                        <p>During this project, I learned not to underestimate the mobile first approach and responsivity, considering how many people currently browse the web from mobile phones, it is necessary to approach different types of devices differently according to our target group and a strategy that we have developed. It is necessary to be able to target our potential customers correctly in both, the form and the content.</p>
                    </div>     
                    <div className='col'>
                        <img src="src\assets\mallari4.png" />
                    </div>                 
                </div>
                <h2 className='projects'>More projects</h2>
                <div className='row'>
                    <div className='col previous'>
                        <Link to="/portfolio2">
                            <img src="src\assets\blockchain1.png" />
                        </Link>
                    </div>
                    <div className='col next'>
                        <Link to="/portfolio4">
                            <img src="src\assets\fashion1.png" />
                        </Link>
                    </div>
                        
                </div>                
            </div>
        </div>
    )
}

export default Portfolio3;