// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <Link className="linkEl" to="/">
      Home
    </Link>
    <Link to="/about">About</Link>
  </div>
)

export default Header
