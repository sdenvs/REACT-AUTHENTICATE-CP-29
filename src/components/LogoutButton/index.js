// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const {history} = props
  const removeJwt = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return <button onClick={removeJwt}>Logout</button>
}

export default withRouter(LogoutButton)
