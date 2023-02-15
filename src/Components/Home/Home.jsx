import React, {useState} from 'react';
import './Home.css'
const Home = () => {
    const [click, setClick] = useState(false);
    const date= new Date();
    const month = date.getMonth()
    const monthName = date.toLocaleDateString("en", {
           month:"long"
    })
   
    const handleClick = () =>setClick(!click);
    const randomquotes = [
      "Decree that you can create it and believe what you decreed",
      "Why agree with I can't when you can agree with I can",
      "You believe in Cu-stum to inspire you, now believe in yourself",
      "Don't let the project tell you what you can and can't do, you tell it",
      "Make I give up give up",
      "Your so close to finishing what you think you can't",
      "Never see code that didn't work as you dont know but see it as I know what doesn't work",
      "What you think doesn't look good to you, may look good to others",
      "Never code trying to be a perfect coder but code with your personality",
      "If you do your best in coding, best coding will follow you",
      "Make I quit quit",
      "Always remember learning code takes time for someone to understand",
      "You got this",
      "If no one told you trying over and over is what makes you the best of the best",
      "Taking breaks between your codes doesn't make you a bad coder but a coder that understands your body limits",
      "I know it may look like nothing going right, but you can finish this project",
      "It don't matter how many coders in the world, no one can code like YOU",
      "Don't stop coding because your code keep making a error, just try another way",
      "Today is a great day to write your code",
      "Don't back down from the challenge, make the challenge backdown",
      "To make your coding career successful, only thing it takes is trying your best",
      "For you to look for inspirational quotes means you are not a quiter but a determine coder",
      "Every coder at some point needed a push to tell them 'keep pushing'",
      "I know YOU can do it, no doubt about it",
      "Don't look at nobody work and say you can't do it, just keep praticing. One day you will be there."
    ];
    const randomQuote = randomquotes[Math.floor(Math.random()*randomquotes.length)];


    return(
       <section className='home'>
         <div className='Art-Container'>
             <div className='quote-mark1'>"</div>
             <img className='earth' src="https://img.icons8.com/fluency/96/null/earth-planet.png"/>
             <div className='quote-mark2'>"</div>
        </div>
          <div className='front-page'>
            <ul>
              <li className='Introduction'>Get a inspirational quote</li>
              <li className='Introduction-second-part'>in 1 second</li>
            </ul>
            <ul className='Introduction-details'>
              <li>We encourage people all around the world</li>
              <li>to not only create what you think you can</li>
              <li>create,but create what you think you cant</li>
              <li className='Introduction-details-end'>create</li>
            </ul>
  
            <ul className={click ? "quoteBox1 active" : "quoteBox1"}>
                <li activeClassName='active' onClick={handleClick} className='quotemessage'>
                     <h1>{monthName}</h1>
                     <h1>{randomQuote}</h1>
                </li>
            </ul>
            <div onClick={handleClick}>
                    <div className={click ? 'quote-Btn':'quote-Btn'}></div>
                </div>
            <button onClick={handleClick} className='quote-Btn'>Get Quote</button>
            <hr className='page1-end'></hr>
            <h2 className='Companies-Info'>Major Companies need your creative talent</h2>
            <ul className='Companies'>
              <li className='Instagram'><img className='Instagram-Logo' src="https://img.icons8.com/fluency/48/null/instagram-new.png"/>Instagram</li>
              <li className='Apple'><img  className='Apple-Logo'src="https://img.icons8.com/ios-glyphs/30/null/mac-os.png"/>Apple</li>
              <li className='Microsoft'><img className='Microsoft-Logo' src="https://img.icons8.com/color/48/null/windows-logo.png"/>Microsoft</li>
              <li className='Netflix'><img  className='Netflix-Logo'src="https://img.icons8.com/ios-glyphs/30/null/netflix--v2.png"/>Netflix</li>
              <li className='TikTok'><img className='TikTok-Logo' src="https://img.icons8.com/color/48/null/tiktok--v1.png"/>TikTok</li>
              <li className='Google'><img className='Google-Logo'src="https://img.icons8.com/color/48/null/google-logo.png"/>Google</li>
            </ul>
            <div className='convincing-status'></div>
            <h1 className='status1'>Only the best quotes</h1>
            <ul className='status1-statement'>
            <li>We make sure the quote that we give you are</li>
             <li>not just quotes that you randomly think but </li>
             <li>quotes that gives you motivation and us as well</li>
             <img src="https://img.icons8.com/wired/64/FD7E14/best-seller.png"/>
             </ul>

             <h1 className='status2'>One quote a day</h1>
            <ul className='status2-statement'>
            <li>We suggest one quote a day</li>
             <li>because it's better for one archer to shoot a bow </li>
             <li>than two or more trying to shoot thee same bow.</li>
             <img src="https://img.icons8.com/wired/64/FD7E14/1--v2.png"/>
             </ul>

             <h1 className='status3'>Touch thoose people that need motivation</h1>
            <ul className='status3-statement'>
            <li>More than 70% of people that say they are about</li>
             <li>to quit, say I can after reading our quotes</li>
             <img src="https://img.icons8.com/wired/64/FD7E14/crowd.png"/>
             </ul>

             <ul className='status4'>
              <li>Are you ready </li>
             
              <li className='status4-gap'>to believe again?</li>
              </ul>
              <ul className={click ? "quoteBox1 active" : "quoteBox1"}>
                <li activeClassName='active' onClick={handleClick} className='quotemessage'>
                     <h1 className='Month'>{monthName}</h1>
                     <h2 >{randomQuote}</h2>
                </li>
            </ul>
             <button onClick={handleClick} className='quote-Btn'>Get Quote</button>
          </div>
       </section>
    )
}

export default Home