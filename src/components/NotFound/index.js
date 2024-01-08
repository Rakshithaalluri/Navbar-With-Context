// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const themeTextColor = isDarkTheme
        ? 'text-light-color'
        : 'text-dark-color'

      const notFoundBgContainer = isDarkTheme
        ? 'not-found-dark'
        : 'not-found-light'

      return (
        <>
          <Navbar />
          <div className={`home-container ${notFoundBgContainer}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${themeTextColor}`}>
              {' '}
              Lost Your Way?{' '}
            </h1>
            <p className={`not-found-text ${themeTextColor}`}>
              {' '}
              We cannot seem to find the page you are looking for{' '}
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
