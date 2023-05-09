import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Redirect from "../components/redirects"
import linkedin from "../images/linkedin-white.png"


const AboutPage = () => (
    <div style={{
        height: "100%",
    }}>
        <Layout>
            <h1> about me </h1>
            <p>
                originally from new york city, currently i am currently studying cs + systems at northeastern university in boston, due to 
                graduate in 2024. i've worked with so many different technologies during my time here, from socket programming in python
                to ood with java and mutex programming in c. over my time, i've developed a deep interest in networks and systems and a deep
                love for the art of coding. as someone who's come from a completely non-technical background, there's still a long way for me
                to go, but i am looking forward to blossoming and finding my own voice in tech 
            </p>
            <p>
                in my spare time, i enjoy diving deep into music of all types, going to concerts, riding public transportation &#40;i am from nyc after all!&#41;, 
                and travelling to all the less-talked-about places around me. i've always enjoyed dipping my toes into something new, whether it be a new
                technology, a new city, or a new album. i never stick with one thing for too long, and its something i love the most about myself. i made this 
                website in the hopes that i can showcase some of my interests to anyone who may come across this, and i hope you have a fun time browsing through!
            </p>
        </Layout>
    </div>

)

export const Head = () => <Seo title="about" />

export default AboutPage