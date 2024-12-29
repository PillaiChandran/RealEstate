import React from 'react'
import { IoMdCall } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
function Contact() {
  return (
    <div>
        <div  className='info'>
      <h4>Our Contact</h4>
      <h2> Easy to contact us</h2>
      <span>  We always ready to help by providijng the best services for you. We
      beleive a good blace to live can make your life better
     </span>
     </div>
     <img className='contact-image' src="main4.jpg" alt="img" />
     <div className='call-contact'>
     <IoMdCall />
     <h5>Call</h5>
     <h6>021 123 145 14</h6>
     <button>Call Now</button>
     </div>
     <div className='chat-contact'>
     <IoChatbubbleEllipsesSharp />
     <h5>Chat</h5>
     <h6>021 123 145 14</h6>
     <button>Chat Now</button>
     </div>

    </div>
  )
}

export default Contact;