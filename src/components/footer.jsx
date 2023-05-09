import * as React from 'react';

const Footer = () => (
    <div 
        className="footer"
        style= {{
            fontFamily: "var(--font-sans)",
            textAlign: "center",
            left: 0,
            bottom: 0,
            fontSize: `var(--font-sm)`,
            color: 'white',
            width: 'calc(100% - 20px)',
            // position: "absolute",
            background: "rgba(0, 0, 0, 75%)",
            margin: "auto",
            // height: "20px",
            padding: "10px",
            // justifyContent: "flex-end",
            flex: "none",
        }}
    >
           © {new Date().getFullYear()} &middot; built by Shoaib Rakhangi with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>       
    </div>
)

export default Footer

