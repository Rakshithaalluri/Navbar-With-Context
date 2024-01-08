// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const onThemeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const websiteLogoTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navbarBgContainer = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const themeText = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'

      return (
        <div className={`navbar ${navbarBgContainer}`}>
          <div className="nav-container">
            <img
              src={websiteLogoTheme}
              className="left-website-logo"
              alt="website logo"
            />
            <ul className="nav-header">
              <Link to="/" className={`nav-link ${themeText}`}>
                <li> Home </li>
              </Link>
              <Link to="/about" className={`nav-link ${themeText}`}>
                <li> About </li>
              </Link>
            </ul>
            <button
              data-testid="theme"
              className="theme-button"
              type="button"
              onClick={onClickToggleTheme}
            >
              <img
                src={onThemeImage}
                alt="theme"
                className="right-website-logo"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
