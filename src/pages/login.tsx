//** Import Next */
import { NextPage } from "next"

import LoginPage from "src/views/pages/login"


type TProp = {}

const Login:NextPage<TProp> = () => {
  return <LoginPage/>
}

export default Login
