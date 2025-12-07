import ExploreBtn from '@/components/ExploreBtn'
import React from 'react'

const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub For Every Dev <br /> Events You Can&apos;t Miss</h1>
      <p className='text-center mt-5'>Hackethons, Meetups, Webinars, All in One Place</p>
      <ExploreBtn />

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {[1, 2, 3, 4, 5].map((event, index) => (
            <li key={index}>
              Event {event}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page