import React from 'react'
import hosts from "../../assets/Group 3618.svg"
import avatar from "../../assets/Ellipse 7.svg"
import avata from "../../assets/Ellipse 7 (1).svg"
import { Link } from 'react-router-dom'

import './Info.scss'

const Info = () => {
  return (
    <div className='max'>
    <div className='info'>
      <div className='info__one'>
        <div className='info__one-msg'>
              <h4>POA Cultural Spaces</h4>
              <p>Proof of Africa cultural spaces is a monthly collaborative event held on twitter to foster
                  awareness of African cultural heritage and encourage the exchange of culture between people and 
                  communities on the blockchain, 
                  starting with gifted cross-chain artists.
                  <br /> <br />
              We intend to collect and preserve pieces of traditions foreign 
              to us on the canvas of our hearts, hence the need to strengthen unity and 
              strategic collaborations with profound NFT Artists cross-chain. 
              A unique onboarding space and an equally great opportunity to Meet, Collab, 
              and make new connections with truly talented artists!</p>

              <button>I’m an artist</button>
          </div>

          <div className='info__one-hosts'>
              <img src={hosts} alt=""/>
          </div>
      </div>

      <div className='info__two'>
          <h3>Meet Your Co-Hosts</h3>

          <div className='ok'>
          <div className="info__two-main">
              <div className='check'>
                  <img src={avatar} alt=""/>
                  <p>Tai Mei</p>
              </div>

              <p className="pp">An accomplished Taiwanese artist and photographer whose bespoke photography project 
                ‘La Tei Mei La Resistance’
                 captures her own experiences and emotions as a woman, artist and Taiwanese.
                 <Link to={{ pathname: `https://twitter.com/taimei_886` }} target="_blank">Connect On Twitter</Link></p>
          </div>

          <div className="info__two-main">
              <div className='check'>
                  <img src={avata} alt=""/>
                  <p>Nkesi</p>
              </div>
              
              <p className="pp">A community builder at heart and a speaker with a passion for onboarding
               people into the web3 space; <Link to={{ pathname: `https://twitter.com/zoepoolz` }} target="_blank"> Zoepool Co-host</Link>, Nkesi is excited about bringing people who 
              share an enthusiasm for Culture and Arts together in this space. <Link to={{ pathname: `https://twitter.com/Nkesi_x` }} target="_blank">Connect On Twitter</Link></p>
          </div>
          </div>
      </div>
      </div>
    </div>
  )
}
export default Info


