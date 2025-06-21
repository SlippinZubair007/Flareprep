import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Homepage = () => {
  return (
    
    <div>
    <div>
    <Link href="/sign-in">
    <Button className="flex absolute right-20 top-10 bg-black text-white">
        Sign In
     </Button>
    </Link>
    </div>

    <div>
      <Link href="https://forms.gle/o6ibxVVTHUjQN3dR9">
      <Button className="absolute right-40 top-10" >
        Register
      </Button>
      </Link>
    </div>
    </div>

    
  )
}

export default Homepage
