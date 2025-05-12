import React from 'react'
import './Main.css'
import { assets } from './../../assets/assets';

const Main = () => {
  return (
    <div className='main'>

        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello, アミル。</span></p>
                <p>How can I help you today?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Suggest the beautiful places in Japan for the vacation</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Create the ideal workout routine for skinny-fat people</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>What are the differences between weightlifting and calesthanics</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Comments my code for the better readability</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>

        </div>
        
    </div>
  )
}

export default Main