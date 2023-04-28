import React from 'react'

export default function Input() {
  return (
    <div>
      <form>
        <input type="text" placeholder='name'> 

        </input>
        <input type="email" placeholder='email'></input>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}