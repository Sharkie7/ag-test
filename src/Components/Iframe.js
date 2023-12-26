import React from 'react'
import '../App.css';
import Iframe from 'react-iframe'


const IframeContainer = () => {
  return (
    
    <div className='iframe'>
    <div>
      <h2 style={{color:'white', paddingTop:'10px'}}>Iframe</h2>
    </div>
    <div>
      {/* <Iframe url="https://www.youtube.com/embed/watch?v=MUMCZZl9QCY"
        width="750px"
        height="480px"
        id=""
      /> */}
      <iframe width="420" height="345" src="https://www.youtube.com/embed/ZzaPdXTrSb8">
</iframe>
    </div>
  </div>
  )
}

export default IframeContainer