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
                Kapiteh Times is a community organization that's all about making our cities feel more like neighborhoods by breaking the barriers between strangers.
            </p>

            <p>
                Why? Because neighborhoods create a sense of belonging. Neighborhoods let us be ourselves. Neighborhoods make us feel like someone has our back.
            </p>
            <h4>What does this have at all to do with sitting with strangers for conversations?</h4>

            <p>
                There are two massive hurdles that often stop us from smiling at each other on the street, taking our headphones out on the bus, or just generally treating others with a huge amount of empathy, understanding, and awesome.
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
                Hi, I'm Chi Yung Lee, and I created Kapiteh Times. If you'd like to have a chat, you can contact me through LinkedIn, and email when that function arrives. 
                If you tell me a story, I'm 10x more likely to reply really fast. Otherwise, forgive me if I take a few days.
            </p>
            <p>
                This website would not exist if it weren't for an incredible team of developers in the TWS community who generously give their genius to making this possible. Get to know them here. If you want to help us, check out our public GitHub repo and our Maker's Blog. Then, email us and let's build a smaller world together.
            </p>
        </div>

    </div>
);

export default About;

