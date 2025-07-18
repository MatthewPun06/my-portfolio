import Fuzhou from './assets/FuZhouNight.jpeg';
import Shifen from './assets/ShifenWaterfall.jpeg';
import Resume from './Resume.js';
import Devlog from './Devlog.js';
import React, { useEffect, useState, useRef} from "react"
export default function Page() {

  return (
    <div style={{color: '#fafaff', fontFamily: 'Oxygen, sans-serif', position: 'relative', width : '100%', scrollbarGutter: 'stable', overflow: 'hidden'}}>
      <img
        src={Fuzhou}
        alt="Fuzhou Night"
        style={{
          width: '2800px',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '925px', margin: '0', overflow: 'scroll'}}>
        <div style={{display: 'flex', alignItems: 'center', maxWidth: '800px', maxheight: '500px', backgroundColor: '#fafaff', color: '#1a1a2a', fontFamily: 'Oxygen', position: 'relative', padding: '15px', borderRadius: '10px'}}>
        <img
          src={Shifen}
          alt="Shifen Waterfall"
          style={{
            objectFit: 'contain',
            maxWidth: '45%',
            left: 0,
          }}
        />
        <div style = {{display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px'}}>
        <h1 style={{paddingLeft: '10px', paddingRight: '10px', textAlign: 'left', color: '#1a1a2a', fontSize: '30px', fontWeight: 'bold', fontFamily: 'MonoSpace' }}>
          Hi! I'm Matthew Pun
          <p style={{fontSize: '17px', fontWeight: 'normal', marginTop: '10px', color: '#1a1a2a', lineHeight: '2', overflow: 'scroll', maxHeight: '300px'}}>
            Welcome to my portfolio! 
            
            I am currently a student at Pennsylvania State University, pursuing a degree in Computer Science. 
            
            I have a passion for software development and enjoy working on projects that challenge my skills and creativity. 
            
            Feel free to explore my work and get in touch!
          </p>
        </h1>
        </div>
        </div>
      </div>
    </div>
  )
}
