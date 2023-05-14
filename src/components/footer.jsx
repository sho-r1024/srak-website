import * as React from 'react';

const Footer = () => (
    <div 
        className="footer"
        style= {{
            textAlign: "center",
            left: 0,
            bottom: 0,
            fontSize: `var(--font-sm)`,
            color: 'white',
            width: 'calc(100% - 20px)',
            background: "rgba(0, 0, 0, 75%)",
            margin: "auto",
            padding: "10px",
            flex: "none",
        }}
    >
           © {new Date().getFullYear()} &middot; built by shoaib rakhangi with
          {` `}
          <a href="https://www.gatsbyjs.com" style={{color: "white"}}git >Gatsby</a>       
    </div>
)

export default Footer

