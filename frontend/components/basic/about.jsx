import React from 'react';
// /about
// About
// Intro Diagram
// Paragraphs, history
const About = () => (
    <div className="basic-page">
        <div className="welcome">
            <img src={window.staticImages.table}/>
            <span>
                About Kapiteh Times <br/>
                <p style={{fontsize: "10px"}}><br/>The mock project that could've bought people together.</p>
            </span>
        </div>

        {/* <h1 className="padding-30">About</h1> */}
        <div className="about">
            <h3>It's good to feel at home.</h3>

            <p>
                Kapiteh Times is a mock project that simulates the website Tea With Strangers, 
                a community organization that's all about making our cities feel more like 
                neighborhoods by breaking barriers between strangers.
            </p>

            <p>
                The website theoretically allows different people to host and/or join meetups 
                where strangers get to meet and have a chat about their topic of choice. 
                To use the service, each member would need to sign up first with their name, 
                an email address to contact and sign in with, and their home region. 
                Each meetup is started by a host who can determine the location, time, 
                and size of the meetup. The host would need to have more information as 
                they are who lost guests contact. Both account and meetup information can 
                be edited until the meetup is in the past.
            </p>
            <h4>What does this have at all to do with Kapiteh Times being a mock project?</h4>

            <p>
                Given that my skills and time are not capable of monitoring and fixing issues 
                with the website in real time, if at all, please do not actually use this website 
                for meetups. Treat it for what it is, a mock up, a personal project intended only 
                for practice and fun.
            </p>
            <p>
                The website is an ongoing project with improvements being made whenever changes are 
                necessary or new ideas come to mind and corresponding features are added.
            </p>
            
            <ol>
                <li>
                    We have our own lives to lead, and empathizing with others is hard when we're stuck in our own heads.
                </li>
                <li>
                    We don't know how others will respond if we actually do something so outlandish as saying, "Hi" or asking "How are you? No really, how are you?"
                </li>
            </ol>
                
            <p>
                So we have a community of hosts that bring small groups of people together for no-strings-attached conversations. Just to talk about anything and everything. It could be deep. It could be funny. It could be awkward. It could be vulnerable. It's different every time, and you can't really plan for that.
            </p>

            <p>
                And it's in this that we can be more understanding of the "strangers" around us. And if more people can share that experience, we might start seeing the objects between us and the rest of our lives as, well, real people. And that makes the space we share feel a lot more like home.
            </p>

            <p>It starts with a conversation.</p>
            <h3>Who is behind all of this?</h3>

            <p>
                Hi, I'm Chi Yung Lee, and I created Kapiteh Times. If you'd like to have a chat, 
                you can contact me through LinkedIn, and email when that function arrives. I'm 
                open to new opportunities.
            </p>
        </div>

    </div>
);

export default About;

