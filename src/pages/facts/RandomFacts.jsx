import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'

const RandomFacts = () => {

    const {fact, factLoading,fetchFacts} = useContext(MyContext)

  return (
    <section className='mt-20 py-10 min-h-[20rem]'>
        <h1 data-aos="fade-up"  className='italic text-center font-bold text-2xl sm:text-3xl lg:text-4xl'>"Check out this <span className='gold-text li-underline'>fact!</span>"</h1>
        <p data-aos="flip-up"  className='mt-20 text-xl sm:text-2xl lg:text-4xl max-w-[80%] mx-auto italic text-center'>
            {
                factLoading ? "A fact is on the way!" : `"${fact}"`
            }
        </p>
        <button aria-label='Get a new fact' data-aos="zoom-in" onClick={fetchFacts} className='dark-btn dark:light-btn custom-btn mx-auto mt-20'>Get a new fact!</button> 
    </section>
  )
}

export default RandomFacts