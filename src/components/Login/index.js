// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const {history} = props

  const createCookies = token => {
    Cookies.set('jwt_token', token)
    history.replace('/')
  }

  const CreateJwt = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      createCookies(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button onClick={CreateJwt} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
