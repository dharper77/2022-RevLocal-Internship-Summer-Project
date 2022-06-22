import React from 'react'

const handleSubmit = () => {
  console.log('form Submitted')
  return <p>Form Submitted</p>
}

const LogInPage = () => {
  return (
    <div className="logInPage">
      <form onSubmit={handleSubmit}></form>
    </div>
  )
}

export default LogInPage
