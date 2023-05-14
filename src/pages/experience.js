import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../components/experience.module.css'

const experiences = [
    {
        name: "Bioinformatics/Data Frontline Support | Broad Institute of MIT and Harvard",
        timeframe: "July 2022 - December 2022",
        relevant_techs: "JIRA, Jenkins, Zendesk, Linux, WDL, Jupyter",
        description: `During my first co-op experience as a Northeastern student, my team and I acted as the first point of communication for over 25,000 \
        users of the platform Terra. Terra is a cloud platform developed by the Broad for researchers to facilitate Google Cloud resource usage in a way that is \
        understandable to people in the biomedical space. I handled tickets related to bugs in the platform or any questions related to possible functionality. I often \
        also forwarded users' feature requests to the software teams and coordinated with them regularly. Overall, this experience gave me a good taste of what it is like to \
        work in a tech space alongside multiple teams and clients working on great things.`,
    },
    {
        name: "Full Stack Developer | Northeastern Electric Racing",
        timeframe: "January 2022 - Present",
        relevant_techs: "GitHub, Node.js, React.js, TypeScript",
        description: `Northeastern Electric Racing is a club at Northeastern with a multi-disciplinary team working together to design and build an electric \
        fully functional and driveable car and participate anually in the Formula Hybrid + Electric Competition. I'm a part of the software team tasked with working on a full-stack web application \
        to service the needs of the 150+ clients from the engineering and business teams working on the nitty-gritty and logistics of the car. My work involved tackling tickets on the front-end and back-end  
        and communicating with partners and team leads to ensure a smooth implementation of new features. This was my introduction to web development as the application stack itself was done\
        was primarily done in TypeScript with React.`,
    },
]

const Experience = () => (
    <Layout>
        <div className='experience-container'>
            <h1>skills</h1>
            <h3>technologies and programs</h3>
            <ul>
                <li>Spyder, Eclipse, IntelliJ, GitHub, Office Suite, VSCode, PyCharm, vim, nano, AWS, JIRA, Jenkins</li>
            </ul>
            <h3><b>coding languages</b></h3>
            <ul>
                <li>Java, Python, Racket, HTML, TypeScript, JavaScript, Linux/Bash, C++, C, x86 Assembly, React.js</li>
            </ul>
            <h1>work/technical experience</h1>
            <div className={styles.experience_list}>
                {
                    experiences.map(
                        experience => (
                            <div>
                                <p><b>{experience.name}</b></p>
                                <p><i>{experience.timeframe}</i></p>
                                <p><b>Skills: </b> {experience.relevant_techs}</p>
                                <p>{experience.description}</p>
                            </div>
                        )                   
                    )
                }
            </div>
            <b>Currently looking for internship/co-op opportunities from June 2023 - December 2023!</b>
        </div> 
    </Layout>
)

export const Head = () => <Seo title="experience" />

export default Experience