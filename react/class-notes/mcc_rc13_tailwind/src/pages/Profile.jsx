import React from 'react'
import ProfileCard from '../components/ProfileCard'

const Profile = () => {
  const arr = [1,2,3,4,5,6,7,8];
  
  return (
    <div>
      <h1 className='text-2xl text-center text-purple-600'>Profile</h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {arr.map((item) => (
          <div className="mt-2 bg-teal-300">{item}</div>
        ))}
      <ProfileCard></ProfileCard>
    </div>
  )
}

export default Profile