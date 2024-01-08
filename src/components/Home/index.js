// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-dark' : 'home-light'

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const themeTextColor = isDarkTheme
        ? 'text-light-color'
        : 'text-dark-color'

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeBgClassName}`}>
            <img src={homeImageUrl} alt="home" className="home-image" />
            <h1 className={`home-heading ${themeTextColor}`}> Home </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
