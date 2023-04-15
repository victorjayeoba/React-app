import React from 'react'
import {useState,useEffect} from "react"
import "./Contact.css"
function Contact() {
  const [text  , setText] = useState("")
  const [clicked  , setClicked] = useState(false)
  useEffect(()=>{
    console.log(text)
  },[text])
  return (
    <div>
        <section id="Contact">
            <h2 className="txt_center"><span className="txt_stroke">CONTACT</span><span> US</span></h2>
      <div className="flex">
        <div className="contact_details">
          <div className="location">
          <span>Visit us:</span>
         <span>Phase II, 23 , Coker Ikoyi ,Lagos ,Nigeria</span> 
          </div>
        <div className="phone_number_wrapper">
          <span>Contact:</span>
         <a href="tel:+2348079458596" className="phone_number">+234-807-945-8596</a>
          </div>
          <div className="email_wrapper">
            <span>Email</span>
            <a href="mailto:victorjayeoba02@gmail.com">fitlab@gmail.com</a>
          </div>
          <div className="follow">
          <span>follow us:</span>
          <a href="https://twitter.com/VickyJay_Media/">@faitlab_official</a>
          </div>
        </div>
         
         <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
        <p>
          kindly subscribe to our newsletter for updates 
        </p>
          <form action="" onSubmit={(e)=>e.preventDefault()}  >
            <input type="email" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <div>
            <small>we promise to never spam you in anyway.</small>
            </div>
          {!clicked && <button type='submit'
          
          onClick={()=>{
            if(text.indexOf("@")!== -1 &&  text.indexOf(".com")!== -1){
              setText("")
              setClicked(!clicked)
            }else{
              setText(text);
              setClicked(clicked)
            }
            }
          }
          >Subscribe</button>
          }
            {clicked && <span className='success_subscribe'>Subscribed!!</span> }
          </form>
         </div>
      </div>
        </section>
    </div>
  )
}

export default Contact