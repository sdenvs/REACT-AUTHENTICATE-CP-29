// Write your JS code here
import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div>
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default About
