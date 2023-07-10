import React from 'react'
import { HashLink } from 'react-router-hash-link'
const Footermy = () => {
  return (
    <footer>
        <main className='footer-main1'>
            <HashLink to="/">  <h2> CODINGSHARK</h2></ HashLink>
            <small> solotions for alll queries</small>
        </main>
        <main className='footer-main2'>
            <h2> Social media </h2>
            <a href="https://www.instagram.com">
                instagram
            </a>
            <a href="https://www.linkedln.com">linkedln</a>
            <a href="https://www.twitter.com">Twitter</a>
        </main>
    </footer>
  )
}

export default Footermy