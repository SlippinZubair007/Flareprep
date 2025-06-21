import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInpage = () => {
  return <main className="flex bg-black justify-center items-center mt-50">
    <SignIn/>
   </main>
}

export default SignInpage
