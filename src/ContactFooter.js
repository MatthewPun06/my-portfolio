import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

export default function Page() {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('matthewpun06', 'contact-template', e.target, '4lZyAu1gblxvVTq9v')
      .then(() => {
        alert('Message sent successfully!');
      }, () => {
        alert('Error sending message.');
      });
  };
    return (
        <div style={{color: '#fafaff', fontFamily: 'Monospace', position: 'relative', width : '100%', scrollbarGutter: 'stable', overflow: 'hidden'}}>
            <h1 style={{textAlign: 'center', paddingTop: '50px', fontSize: '34px', paddingBottom: '0px'}}>
                Contact 
                <hr style={{marginLeft: '5%', marginRight: '5%'}}/>
            </h1>
            <div style={{display: 'flex', justifyContent: 'right', flexDirection: 'column', alignItems: 'top', marginTop: '0px', padding: '20px'}}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                            <h2 className = {'header2'}>Name: </h2>
                            <h2 className = {'header2'}> Email: </h2>
                        </div>
                        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
                            <input type="text" name="name" id = 'name' placeholder="Your name" required className = {'textinput'}/>
                            <input type="email" name="email" id = 'email' placeholder="Your email" required className = {'textinput'}/>
                        </div>

                        <div style = {{justifyContent: 'center', alignItems: 'center', marginBottom: '20px', width: '100%'}}>
                            <h2 className = {'header2'}> Subject: </h2>
                            <br/>
                            <input type="text" id = 'subject' name="subject" placeholder="Subject" required className = {'textinput'}/>
                        </div>

                        <h2 className = {'header2'}> Message: </h2>
                        <br/>
                        <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
                            <textarea className = {'textarea'} name="message" id = 'message' placeholder="Your message" required />
                        </div>
                        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                        <button className = {'button2'} type="submit">Send</button>
                        </div>
                    </form>
            </div>
        </div>
                    
    )
}