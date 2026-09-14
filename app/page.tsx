import React from 'react'
import ProfileHeader from './features/ProfileHeader/components/ProfileHeader'
import LinkList from './features/Linklist/components/LinkList'
import FeaturedEvent from './features/FeaturedEvent/components/FeaturedEvent'
import Footer from './features/Footer/components/Footer'

const page = () => {
  return (
     <main className="flex min-h-screen justify-center px-5 pb-16 pt-14">
      <div className="w-full bg-white/80 shadow-xl rounded-3xl h-full max-w-[560px] animate-[rise_0.7s_ease-out]">
        <ProfileHeader />
        <FeaturedEvent/>
        <LinkList/>
        <Footer/>
        
       
      </div>
    </main>
  )
}

export default page