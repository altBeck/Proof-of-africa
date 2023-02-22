import React from 'react'
import proof from "../../assets/Proof of Africa negative w-tagline 2.svg"
import fb from "../../assets/Vector.svg"

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="foot">
        <div className='footer__one'>
            <img src={proof} alt=""/>

            <p>Join our newsletter to stay up to date on features and releases.</p>
            <form>
                <input
                placeholder='yourname@email.com'/>

                <button>Subscribe</button>
            </form>

            <p className='p'>By subscribing you agree to our Privacy Policy and provide consent to 
                receive updates from our company.</p>
        </div>


        <div className='footer__two'>
            <div className='footer__two-one'>
                <p>About Us</p>

                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
            </div>

            <div className='footer__two-two'>
                <p>Follow Us</p>

                <li>
                    <img src={fb} alt=""/>
                    <span>Facebook</span>
                </li>
                <li>
                    <img src={fb} alt=""/>
                    <span>Facebook</span>
                </li>
                <li>
                    <img src={fb} alt=""/>
                    <span>Facebook</span>
                </li>
                <li>
                    <img src={fb} alt=""/>
                    <span>Facebook</span>
                </li>
            </div>
        </div>

        </div>

        <hr />
        
        <div className='footer__three'>
            <p>2023 Proof of Africa. All right reserved.</p>

            <div className='footer__three-one'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Footer