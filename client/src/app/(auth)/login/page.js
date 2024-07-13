import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'

const Login = async () => {
  return (
    <div className="my-6 py-4 mx-auto max-w-lg font-lato">
      <h1 className="text-4xl mb-8 font-extrabold text-[#263238] text-center">
        Welcome back
      </h1>
      <LoginForm />
    </div>
  )
}

export default Login
