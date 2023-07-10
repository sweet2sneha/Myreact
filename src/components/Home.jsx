import React from 'react'
import "../styles/Home.css"
import {AiFillGoogleCircle, AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai"
import {SiFlipkart} from "react-icons/si"
const Home = () => {
  return (
    <div>
      <div className='home1'> <div className='home-inner'> <h1>home </h1> <p> its my solutions company </p></div></div>
      <main className='main'> <div className='home2' id='about'> <h1> about</h1> <p> Lorem, ipsum dolor sit
         amet consectetur adipisicing elit. Mollitia ex delectus, labore maxime tempora quaerat excepturi 
         optio laborum totam quam quia rerum. Nihil fugiat incidunt distinctio sequi perspiciatis earum
          optio!</p><button className='btn btn-primary rounded'>Read More...</button></div></main>
      <div className='home3' id='brands'>
         <div className='home3-inner'>
          <h1> brands</h1>
          <div className='brands'>
            <div className='brand' style={{animationDelay: "0.25s"}}>
                <AiFillGoogleCircle className="iconss"/>
                <p>google</p>
            </div> 
            <div className='brand' style={{animationDelay: "0.5s"}}>
                <AiFillInstagram className="iconss"/>
                <p>instagram</p>
            </div>
            <div className='brand' style={{animationDelay: "0.75s"}}>
                <AiFillAmazonCircle className="iconss"/>
                <p>amazon</p>
            </div>
            <div className='brand' style={{animationDelay: "0.25s"}}>
                <SiFlipkart className="iconss"/>
                <p>flipkart</p>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home