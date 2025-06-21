import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className='bg-surface-dark border-2 border-main-dark/50 p-6 rounded-lg'>
        <div className='group rounded-lg overflow-hidden'>
            <img className='scale-100 group-hover:scale-[1.02]' src={item.img} alt={item.title} />
        </div>
        <h1 className='mt-4 text-xl font-bold '>{item.title}</h1>
        <h3 className='mt-4 subtext-color'>{item.short_description}</h3>

        <div className='mt-4 flex items-center gap-4'>

            <a className='group' target='_blank' href={item.live_demo}><button className='custom-btn light-btn'>Live Demo <FaArrowRightLong className='group-hover:translate-x-2'/></button></a>

            <Link to={`/project/${item.title}`}><button className='cursor-pointer'>More Details</button></Link>
        </div>
    </div>
  )
}

export default Card