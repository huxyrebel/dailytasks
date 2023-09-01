import React from 'react'
import "../components/card1.css"
function Card1() {
  return (
    <div className='card1-container f-flex justify-content-center align-items-center text-center'>
    <div className='row'>
    <div className='col-3 q'>
        <h6 className='replies'>prize location</h6>
        <p className='comment'>Explore Pakistan from the comfort of our luxurious properties found in ideal locations
                                    with beautiful surroundings. </p>
    </div>

    <div className='col-3 w'>
        <h6 className='replies'>fine dining</h6>
        <p className='comment'>Our restaurants cater to a diversity of tastes with a selection of both local and
                                    international cuisines served in an elegant ambience.</p>

    </div>

    <div className='col-3 e'>
        <h6 className='replies'>meetings and events</h6>
        <p className='comment'>Enjoy state-of-the-art facilities designed to cater to your every business need.</p>

    </div>

    <div className='col-3 r'>
        <h6 className='replies'>spa and fitness</h6>
        <p className='comment'>Relax and unwind in our spas, or push your limits in the gym. Embrace a journey of
                                    transformation.</p>

    </div>

    </div>
    </div>
  )
}

export default Card1