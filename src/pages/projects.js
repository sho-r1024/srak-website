import * as React from 'react'

import Layout from '../components/layout'
import Redirect from '../components/redirects'
import bass from '../images/bass.png'
import github from '../images/github.png'

const projects = [
    {
        name: "K-Clustering Algorithm",
        description: "This was a solo project I did for my Math of Data Models class and my first dive into machine learning. \
        This algorithm would essentially take in a large training set of data and cluster the points into k number of clusters based on the \
        proximity between points, with k (i.e. the number of clusters) being entered in when running the algorithm. \
        Using the knowledged gained from the training set, it could then assign a cluster to any new data point afterwards.",
        is_available: false,
        links: []
    },
    {
        name: "Java Swing Animator",
        description: "Me and two others came together to make an animator using Java Swing for our Object-Oriented Design class. it was built using \
        object-oriented principles and the mvc design. it has the ability to read instructions from files in both .txt and .svg formats before projecting \
        them in a java swing window.",
        is_available: false,
        links: []
    },
    {
        name: "BASS Booster",
        description: "this is a small project me and 3 others did for HackBeanpot 2023 using React. it manipulates the audio of video uploads to destroy \
        the audio quality massively for comedic effect. the manipulation is powered by JavaScript's Web Audio API and is randomized every upload. this project \
        was my first foray into web development which greatly increased my confidence with working in React and we all had a lot of fun making it.",
        is_available: true,
        links: 
        [
            {  
                logo: github,
                destination: "https://github.com/stephensond/BASS-boost"
            },
            {
                logo: bass,
                destination: "https://bass-boosting.netlify.app/"
            }
        ]
    },
    {
        name: "This website!",
        description: "Having worked a lot with React while making the BASS Booster website, I felt more confident on working on my own website. \
        After a few days of planning out logistics and design, I went with Gatsby as the framework of choice because of its streamlined usage of various \
        different technologies such as React and GraphQL. In my first and current iteration of this website, I decided to start off simple and make a simple portfolio \
        website to learn more about JS, HTML, CSS, and React, however I'm hoping to make this website into a little space to showcase myself and my interests. I plan to use \
        GraphQL to make a blog where I write about what I'm interested in and what I'm currently thinking about now.",
        is_available: true,
        links: [
            {
                logo: github,
                destination: "https://github.com/sho-r1024/srak-personal-website"
            }
        ]
    }
]

function render_project_links(project) {
    if (project.links.length === 0) {
        return (
            <b>Code available upon request.</b>
        )
    } else {
        return project.links?.map(
            link => (
                <Redirect 
                    link_img={link.logo}
                    destination={link.destination}
                />
            )
        )
    }
}

const ProjectsPage = () => (
   <Layout>
        <h1>projects</h1>
        <ul>
        {projects.map(
            project => (
                <li>
                    <p><b>{project.name}</b></p>
                    <p>{project.description}</p>
                    <div style={{display: "flex", gap: "10px"}}>
                        {render_project_links(project)}
                    </div>
                </li>
            )
        )}
        </ul>
   </Layout> 
)

export default ProjectsPage