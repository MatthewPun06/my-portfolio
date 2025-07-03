import React, { useRef} from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import './App.css'

export default function Page() {
    const parallax = useRef(null)
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '800px', overflowX: 'scroll', backgroundColor: '#1a1a2a', fontFamily: 'Monospace, sans-serif'}}>
            <Parallax ref={parallax} pages={5} horizontal style={{backgroundColor: '#1a1a2a' }}>
                <ParallaxLayer offset={0} speed={0.4} sticky = {{start: 0, end: 1}}>
                    <div className = {'slopeBegin'} style = {{backgroundColor: '#5aaaff', display: 'block'}}>
                        <h1 style={{paddingLeft: '40px', fontSize: '45px', color: '#fafaff', paddingTop: '10px'}}>
                            UI and Battle Systems
                        </h1>
                        <h1 style={{paddingLeft: '20px', fontSize: '125px', color: '#fafaff', paddingTop: '140px'}}>
                            06/30
                        </h1>
                    </div>
                    {/* <div className={'slopeEnd'} style = {{backgroundColor: '#ffffff'}} /> */}
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3} style = {{backgroundColor: '#1a1a2a'}}>
                    <div style={{ marginLeft: '45%', marginRight: '50px', marginTop: '50px', height: '350px'}}>
                        <h1 style={{color: '#fafaff', paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                            Technical Updates:
                        </h1>
                        <p>
                            <ul style={{color: '#fafaff', fontSize: '20px', paddingLeft: '20px'}}>
                                <li>Implemented a basic HUD with a minimap, location names, and placeholders for other UI elements</li>
                                <br/>
                                <li>Outlined the main menu with basic components and drew concept art for its art direction.</li>
                                <br/>
                                <li>Laid out the overhead for managing enemy interactions and starting combat</li>
                                <br/>
                                <li>Outlined the main parts and structure of the battle system and its combatants</li>
                            </ul>
                        </p>
                    </div>
                    <div style={{ marginLeft: '32%', marginRight: '350px', marginBottom: '50px', height: '350px'}}>
                        <h1 style={{color: '#fafaff', paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                            Creative Updates:
                        </h1>
                        <p>
                            <ul style={{color: '#fafaff', fontSize: '20px', paddingLeft: '20px'}}>
                                <li>Sketched key landmarks of the starting area including concept art for three settlements and a larger map of the entire area</li>
                                <br/>
                                <li>Organized and wrote the first 7 chapters of main story events</li>
                                <br/>
                                <li>Continued adding depth to each of the 6 party members: their backgrounds, struggles, goals, personalities, and interactions</li>
                                <br/>
                                <li>Created ability sets for each of the party members including two weapon types with 10 abilities for each weapon with unique effects</li>
                            </ul>
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.3} style = {{backgroundColor: '#1a1a2a'}}>
                    <div style={{ marginLeft: '45%', marginRight: '50px',  marginTop: '50px', height: '350px'}}>
                        <h1 style={{color: '#fafaff', paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                            Technical Photos:
                        </h1>
                        <p>
                            <ul style={{color: '#fafaff', fontSize: '20px', paddingLeft: '20px'}}>
                                
                            </ul>
                        </p>
                    </div>
                    <div style={{ marginLeft: '32%', marginRight: '350px',  marginBottom: '50px', height: '350px'}}>
                        <h1 style={{color: '#fafaff', paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                            Creative Photos:
                        </h1>
                        <p>
                            <ul style={{color: '#fafaff', fontSize: '20px', paddingLeft: '20px'}}>
                                
                            </ul>
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.4}>
                    <div className = {'slopeEnd'} style = {{backgroundColor: '#5aefa0'}}/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.4}>
                    <div className = {'slopeBegin'} style = {{backgroundColor: '#5aefa0'}}>
                        <h1 style={{paddingLeft: '40px', fontSize: '45px', color: '#fafaff', paddingTop: '10px'}}>
                            Battle System
                        </h1>
                        <h1 style={{paddingLeft: '20px', fontSize: '125px', color: '#fafaff', paddingTop: '140px'}}>
                            06/31
                        </h1>
                    </div>
                </ParallaxLayer>
                {/* <ParallaxLayer offset={3} speed={0.6}>
                    <div className={'slopeEnd'} style = {{backgroundColor: '#ffffff'}} />
                </ParallaxLayer> */}
            </Parallax>
        </div>
    )
}