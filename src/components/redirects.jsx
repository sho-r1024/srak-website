import React from 'react'
import '../components/redirects.css'

const Redirect = ({destination, link_text, link_img}) => {
    const img_size = link_text ? 30 : 50
    console.log(img_size)
    return (
        <a 
            href={destination}
            target="_blank"
            rel="referrer noopener"
            style={
                {
                    textDecoration: "none",
                    color: "white"
                }
            }
        >
            <div className="container">
                {/* <script>
                    if(link_text) {
                        <img 
                            src={link_img} 
                            alt="LinkedIn logo" 
                            style={{
                                height: "20px",
                                width: "20px",
                            }}></img>        
                    } else {
                        <img 
                            src={link_img} 
                            alt="LinkedIn logo" 
                            style={{
                                height: "50px",
                                width: "50px",
                            }}></img>                            
                    }   
                </script>  */}
                <div className="link_img" id="image">
                    <img 
                        src={link_img}
                        style={{
                            height: `${img_size}px`,
                            width: `${img_size}px`,
                        }}/>                    
                </div>
                <div className="link_text">
                    {link_text}
                </div>               
            </div>
        </a>
    )
}

export default Redirect