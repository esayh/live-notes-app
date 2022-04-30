import React, { useEffect } from 'react'

const Faves = () => {
  useEffect(() => {
    document.title = "My favorites - Live Notes"
  })
  return (
    <div>
      <h1>Live Notes</h1>
      <p>My faves</p>
    </div>
  )
}

export default Faves