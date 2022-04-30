import React, { useEffect } from 'react'

const Mynotes = () => {
  useEffect(() => {
    document.title = "My Note - Live Notes"
  })
  return (
    <div>
      <h1>Live Notes</h1>
      <p>My note</p>
    </div>
  )
}

export default Mynotes