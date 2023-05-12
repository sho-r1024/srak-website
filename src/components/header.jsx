import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const header_link_styles = {
  color: "white",
  textDecoration: 'none'
}

const header_active_style = {
  borderBottom: "1px solid white",
  padding: "2px"
}

const Header = ({ site_title, nav_links }) => (
  <header
    style={{
      left: 0
    }}
  >

      <div>
        <nav>
          <ul style={{ 
            display: "flex",
            flex: 1,
            margin: 0}}>
            <li style={{
              listStyleType: 'none',
              paddingRight: '1rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}>
              <Link to="/" style={header_link_styles}>
                <b>{site_title}</b>
              </Link>
            </li>
            {nav_links.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: 'none',
                  padding: '1rem',
                }}
              >
                <Link 
                  to={link.link} 
                  style={header_link_styles} 
                  activeStyle={header_active_style}> 
                    {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
  </header>
)

Header.propTypes = {
  site_title: PropTypes.string,
}

Header.defaultProps = {
  site_title: '',
}

export default Header
