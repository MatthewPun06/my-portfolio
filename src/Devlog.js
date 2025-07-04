import React, { useRef} from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import hometown from './assets/devlog/hometown.jpeg'
import hometown2 from './assets/devlog/hometown2.jpeg'
import hometownmap from './assets/devlog/hometownmap.jpeg'
import './App.css'
const white = '#fafaff';
const black = '#1a1a2a';
const green = '#5aefa0';
const blue = '#5aaaff';
export default function Page() {
    const parallax = useRef(null)
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '800px', overflowX: 'scroll', backgroundColor: black, fontFamily: 'Monospace, sans-serif'}}>
            <Parallax ref={parallax} pages={3} horizontal style={{backgroundColor: black }}>

                {/* First Page (6/30 UI and Battle System) */}
                {/* Slope Design and Header */}
                <ParallaxLayer offset={0} speed={0.4} sticky = {{start: 0, end: 1}}>
                    <div className = {'slopeBegin'} style = {{backgroundColor: blue, display: 'block'}}>
                        <h1 style={{paddingLeft: '40px', fontSize: '45px', color: white, paddingTop: '10px'}}>
                            UI and Battle System
                        </h1>
                        <h1 style={{paddingLeft: '20px', fontSize: '125px', color: white, paddingTop: '140px'}}>
                            06/30
                        </h1>
                    </div>
                </ParallaxLayer>
                {/* Content */}
                <ParallaxLayer offset={0} speed={0.3} style = {{backgroundColor: black}}>
                    <div style={{ marginLeft: '45%', marginRight: '200px', marginTop: '50px', height: '350px'}}>
                        <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                            Technical Updates:
                        </h1>
                        <p>
                            <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
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
                    <div style={{ marginLeft: '32%', marginRight: '400px', marginBottom: '50px', height: '350px'}}>
                        <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                            Creative Updates:
                        </h1>
                        <p>
                            <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
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
                <ParallaxLayer offset={0} speed={0.3}>
                    <div className = {'slopeEnd'} style = {{backgroundColor: blue+'aa', display: 'block'}}>
                        
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.3} style = {{backgroundColor: black}}>
                    <div className = {'slopeBegin'} style = {{backgroundColor: blue+'aa', display: 'block'}}>
                    </div>
                        <div style={{display: 'block', marginLeft: '45%', marginRight: '200px', marginTop: '50px', height: '350px'}}>
                            <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                Visual Updates:
                            </h1>
                            <p>
                                <img src = {hometown} style = {{height: '300px'}}/>
                                <img src = {hometown2} style = {{height: '300px'}}/>
                                <img src = {hometownmap} style= {{height: '300px'}}/>
                            </p>
                        </div>
                        <div style={{display: 'block',  marginLeft: '32%', marginRight: '400px', marginBottom: '50px', height: '350px'}}>
                            <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                Goals for July:
                            </h1>
                            <p>
                                <ol style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                    <li>Enter/start battle by prompting or by being seen/heard</li>
                                    <br/>
                                    <li>Battle using automatic attacks, abilities, and talents</li>
                                    <br/>
                                    <li>Add a battle UI for health bars, status effects, and movesets</li>
                                    <br/>
                                    <li>Apply and implement status effects</li>
                                </ol>
                            </p>
                        </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.4}>
                    <div className = {'slopeEnd'} style = {{backgroundColor: green}}/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.4}>
                    <div className = {'slopeBegin'} style = {{backgroundColor: green}}>
                        <h1 style={{paddingLeft: '40px', fontSize: '45px', color: white, paddingTop: '10px'}}>
                            Battle System
                        </h1>
                        <h1 style={{paddingLeft: '20px', fontSize: '125px', color: white, paddingTop: '140px'}}>
                            07/31
                        </h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.3}>
                    <div className={'slopeEnd'} style = {{backgroundColor: green+'aa'}} />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
