import React, { useContext } from 'react'
import './Main.css'
import { assets } from './../../assets/assets';
import { Context } from '../../context/Context.jsx';

const Main = () => {

    const { onSent, recentPrompts, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>

            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            {!showResult
                ? <>
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
                    </div>
                </>
                : <div className='result'>
                    <div className="result-tile">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompts}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        } 
                    </div>
                </div>
            }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>

        </div>
    )
}

export default Main