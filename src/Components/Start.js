import {useRef} from 'react'

function Start({setUsername}) {
    const inputRef = useRef();

    const handleClick=() =>{
    inputRef.current.value && setUsername(inputRef.current.value);
    }

  return (
    <div className='start'>
      <input placeholder='Enter your name' className='start-input' ref={inputRef}></input>
      <button className='start-btn' onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start
