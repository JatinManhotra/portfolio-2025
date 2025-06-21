import React from 'react'

const ViewAllCard = () => {
  return (
    <div className="bg-surface-dark border-2 border-main-dark/50 p-6 rounded-lg flex flex-col items-center justify-center text-center">
    <h2 className="text-xl font-bold mb-4">Want to see more?</h2>
    <a
      href="https://github.com/JatinManhotra"
      target="_blank"
      className="custom-btn light-btn"
    >
      View All Projects
    </a>
  </div>
  )
}

export default ViewAllCard