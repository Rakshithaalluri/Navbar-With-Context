// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-dark' : 'home-light'

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const themeTextColor = isDarkTheme
        ? 'text-light-color'
        : 'text-dark-color'

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeBgClassName}`}>
            <img src={homeImageUrl} alt="about" className="home-image" />
            <h1 className={`home-heading ${themeTextColor}`}> About </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
