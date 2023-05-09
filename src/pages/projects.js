import * as React from 'react'

import Layout from '../components/layout'
import Redirect from '../components/redirects'
import bass from '../images/bass.png'
import github from '../images/github.png'

const projects = [
    {
        name: "k-clustering algorithm",
        description: "this was a solo project i did for my math of data models class and my first dive into machine learning. \
        this algorithm would essentially take in a large training set of data and cluster the points into k number of clusters based on the \
        proximity between points. using the data set it could then assign a cluster to any new data point afterwards.",
        is_available: false,
        links: []
    },
    {
        name: "java swing animator",
        description: "me and two others came together to make an animator using Java Swing for our Object-Oriented Design class. it was built using \
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
    }
]

function render_project_links(project) {
    if (project.links.length == 0) {
        return (
            <b>Code available upon request</b>
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