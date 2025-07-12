import React, { useRef, useEffect} from "react"
import hometown from './assets/devlog/hometown.jpeg'
import hometown2 from './assets/devlog/hometown2.jpeg'
import hometownmap from './assets/devlog/hometownmap.jpeg'
import partyswapping from './assets/devlog/PartySwapping.jpeg'
import './App.css'
const white = '#fafaff';
const black = '#1a1a2a';
const green = '#5aefa0';
const blue = '#5aaaff';
const purple = '#a3a3ff'
export default function Page() {
    const scrollRef = useRef(null);
    const elementRef = useRef(null)
    const baseWidth = 1800
    var scale = window.innerWidth / baseWidth
    var height = 800 * scale;
    const pagenumber = 3;
    var pagewidth; 
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
        scale = width / baseWidth
        pagewidth = baseWidth * scale;
        height = 800 * scale;

      if (elementRef.current) {
        elementRef.current.style.transform = `scale(${scale})`
        elementRef.current.style.transformOrigin = "top left"
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // run once at load

    return () => window.removeEventListener("resize", handleResize)
  }, [])
    return (
        <div ref={scrollRef} onClick = {() => scrollRef.current.scrollTo({ left: Math.floor((scrollRef.current.scrollLeft + pagewidth)/pagewidth)*pagewidth % (pagewidth * pagenumber), behavior: "smooth"})} style={{position: 'relative', marginLeft: '5%', marginRight: '5%', overflowX: 'scroll', fontFamily: 'Monospace, sans-serif', overflowY: 'hidden'}}>
            <div style = {{height: `${height}px`}} ref={elementRef} id = "parallax-page">
                {/* First Page (6/30 UI and Battle System) */}
                <div style = {{position: "absolute", width: `1800px`}}>
                    {/* Slope Design and Header */}
                    <div style = {{position: "absolute"}}>
                        <div className = {'slopeBegin'} style = {{backgroundColor: blue}}>
                            <h1 style={{paddingLeft: '40px', fontSize: '45px', color: white, paddingTop: '10px'}}>
                                UI and Battle System
                            </h1>
                            <h1 style={{paddingLeft: '20px', fontSize: '125px', color: white, paddingTop: '140px'}}>
                                06/30
                            </h1>
                        </div>
                    </div>
                    {/* Content */}
                    <div className= {'slopeContent'} style = {{display: 'block', position: "absolute", zIndex: "1", overflowX: 'scroll', width: `1800px`, overflowY: 'hidden'}}>
                        <div style = {{position: 'absolute'}}>
                            <div style={{ marginLeft: '720px', width: '850px', marginTop: '50px', height: '350px'}}>
                                <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                    Technical Updates:
                                </h1>
                                <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                    <li>Implemented a basic HUD with a minimap, location names, and placeholders for other UI elements</li>
                                    <br/>
                                    <li>Outlined the main menu with basic components and drew concept art for its art direction.</li>
                                    <br/>
                                    <li>Laid out the overhead for managing enemy interactions and starting combat</li>
                                    <br/>
                                    <li>Outlined the main parts and structure of the battle system and its combatants</li>
                                </ul>
                            </div>
                            <div style={{ marginLeft: '540px', width: '850px', marginBottom: '50px', height: '350px'}}>
                                <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                    Creative Updates:
                                </h1>
                                <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                    <li>Sketched key landmarks of the starting area including concept art for three settlements and a larger map of the entire area</li>
                                    <br/>
                                    <li>Organized and wrote the first 7 chapters of main story events</li>
                                    <br/>
                                    <li>Continued adding depth to each of the 6 party members: their backgrounds, struggles, goals, personalities, and interactions</li>
                                    <br/>
                                    <li>Created ability sets for each of the party members including two weapon types with 10 abilities for each weapon with unique effects</li>
                                </ul>
                            </div>
                        </div>
                        <div className = {'slopeEnd'} style = {{backgroundColor: blue+'aa', display: 'block', position: "absolute"}}/>
                        <div style = {{marginLeft: `1800px`, position: "absolute"}}>
                            <div className = {'slopeBegin'} style = {{backgroundColor: blue+'aa', display: 'block', position: "absolute"}}/>
                                <div style={{ marginLeft: '720px', width: '850px', marginTop: '50px', height: '350px'}}>
                                    <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                        Visual Updates:
                                    </h1>
                                    <p>
                                        <img src = {hometown} style = {{height: '250px'}}/>
                                        <img src = {hometown2} style = {{height: '250px'}}/>
                                        <img src = {hometownmap} style= {{height: '250px'}}/>
                                    </p>
                                </div>
                                <div style={{ marginLeft: '540px', width: '850px', marginBottom: '50px', height: '350px'}}>
                                    <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                        Goals for July:
                                    </h1>
                                    <ol style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                        <li>Enter/start battle by prompting or by being seen/heard</li>
                                        <br/>
                                        <li>Battle using automatic attacks, abilities, and talents</li>
                                        <br/>
                                        <li>Add a battle UI for health bars, status effects, and movesets</li>
                                        <br/>
                                        <li>Apply and implement status effects</li>
                                    </ol>
                                </div>
                        </div>
                    </div>
                    <div className = {'slopeEnd'} style = {{backgroundColor: green}}/>
                </div>
                {/* Second Page (6/30 UI and Battle System) */}
                <div style = {{position: "absolute", marginLeft: `1800px`, width: `1800px`}}>
                    {/* Slope Design and Header */}
                    <div style = {{position: "absolute"}}>
                        <div className = {'slopeBegin'} style = {{backgroundColor: green}}>
                            <h1 style={{paddingLeft: '40px', fontSize: '45px', color: white, paddingTop: '10px'}}>
                                Battle System
                            </h1>
                            <h1 style={{paddingLeft: '20px', fontSize: '125px', color: white, paddingTop: '140px'}}>
                                07/31
                            </h1>
                        </div>
                    </div>
                    {/* Content */}
                    <div className= {'slopeContent'} style = {{display: 'block', position: "absolute", zIndex: "1", overflowX: 'scroll', width: `1800px`, overflowY: 'hidden'}}>
                        <div style = {{position: 'absolute'}}>
                            <div style={{ marginLeft: '720px', width: '850px', marginTop: '50px', height: '350px'}}>
                                <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                    Technical Updates:
                                </h1>
                                <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                    <li>Added party member switching using Q and E</li>
                                    <br/>
                                    {/* <li> </li>
                                    <br/>
                                    <li> </li>
                                    <br/>
                                    <li> </li> */}
                                </ul>
                            </div>
                            <div style={{ marginLeft: '540px', width: '850px', marginBottom: '50px', height: '350px'}}>
                                <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                    Creative Updates:
                                </h1>
                                <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                    <li>Developed character flaws, beliefs, goals, and arcs</li>
                                    <br/>
                                    {/* <li>Organized and wrote the first 7 chapters of main story events</li>
                                    <br/>
                                    <li>Continued adding depth to each of the 6 party members: their backgrounds, struggles, goals, personalities, and interactions</li>
                                    <br/>
                                    <li>Created ability sets for each of the party members including two weapon types with 10 abilities for each weapon with unique effects</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className = {'slopeEnd'} style = {{backgroundColor: green+'aa', display: 'block', position: "absolute"}}/>
                        <div style = {{marginLeft: `1800px`, position: "absolute"}}>
                            <div className = {'slopeBegin'} style = {{backgroundColor: green+'aa', display: 'block', position: "absolute"}}/>
                                <div style={{ marginLeft: '720px', width: '850px', marginTop: '50px', height: '350px'}}>
                                    <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                        Visual Updates:
                                    </h1>
                                    <img src = {partyswapping} style = {{height: '250px'}}/>
                                    {/* <img src = {hometown2} style = {{height: '250px'}}/>
                                    <img src = {hometownmap} style= {{height: '250px'}}/> */}
                                </div>
                                <div style={{ marginLeft: '540px', width: '850px', marginBottom: '50px', height: '350px'}}>
                                    {/* <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                        Goals for July:
                                    </h1>
                                    <ol style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                        <li>Enter/start battle by prompting or by being seen/heard</li>
                                        <br/>
                                        <li>Battle using automatic attacks, abilities, and talents</li>
                                        <br/>
                                        <li>Add a battle UI for health bars, status effects, and movesets</li>
                                        <br/>
                                        <li>Apply and implement status effects</li>
                                    </ol> */}
                                </div>
                        </div>
                    </div>
                    <div className = {'slopeEnd'} style = {{backgroundColor: purple}}/>
                </div>
                {/* Third Page (6/30 UI and Battle System) */}
                <div style = {{position: "absolute", marginLeft: `3600px`, width: `1800px`}}>
                    {/* Slope Design and Header */}
                    <div style = {{position: "absolute"}}>
                        <div className = {'slopeBegin'} style = {{backgroundColor: purple}}>
                            <h1 style={{paddingLeft: '40px', fontSize: '45px', color: white, paddingTop: '10px'}}>
                                Battle System (pt 2)
                            </h1>
                            <h1 style={{paddingLeft: '20px', fontSize: '125px', color: white, paddingTop: '140px'}}>
                                08/31
                            </h1>
                        </div>
                    </div>
                    {/* Content */}
                    <div className= {'slopeContent'} style = {{display: 'block', position: "absolute", zIndex: "2", overflowX: 'scroll', width: `1800px`, overflowY: 'hidden'}}>
                        <div style = {{position: 'absolute'}}>
                            <div style={{ marginLeft: '720px', width: '850px', marginTop: '50px', height: '350px'}}>
                                {/* <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                    Technical Updates:
                                </h1>
                                <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                    <li>Implemented a basic HUD with a minimap, location names, and placeholders for other UI elements</li>
                                    <br/>
                                    <li>Outlined the main menu with basic components and drew concept art for its art direction.</li>
                                    <br/>
                                    <li>Laid out the overhead for managing enemy interactions and starting combat</li>
                                    <br/>
                                    <li>Outlined the main parts and structure of the battle system and its combatants</li>
                                </ul> */}
                            </div>
                            <div style={{ marginLeft: '540px', width: '850px', marginBottom: '50px', height: '350px'}}>
                                {/* <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                    Creative Updates:
                                </h1>
                                <ul style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                    <li>Sketched key landmarks of the starting area including concept art for three settlements and a larger map of the entire area</li>
                                    <br/>
                                    <li>Organized and wrote the first 7 chapters of main story events</li>
                                    <br/>
                                    <li>Continued adding depth to each of the 6 party members: their backgrounds, struggles, goals, personalities, and interactions</li>
                                    <br/>
                                    <li>Created ability sets for each of the party members including two weapon types with 10 abilities for each weapon with unique effects</li>
                                </ul> */}
                            </div>
                        </div>
                        <div className = {'slopeEnd'} style = {{backgroundColor: purple+'aa', display: 'block', position: "absolute"}}/>
                        <div style = {{marginLeft: `1800px`, position: "absolute"}}>
                            <div className = {'slopeBegin'} style = {{backgroundColor: purple+'aa', display: 'block', position: "absolute"}}/>
                                <div style={{ marginLeft: '720px', width: '850px', marginTop: '50px', height: '350px'}}>
                                    {/* <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                        Visual Updates:
                                    </h1>
                                    <img src = {hometown} style = {{height: '250px'}}/>
                                    <img src = {hometown2} style = {{height: '250px'}}/>
                                    <img src = {hometownmap} style= {{height: '250px'}}/> */}
                                </div>
                                <div style={{ marginLeft: '540px', width: '850px', marginBottom: '50px', height: '350px'}}>
                                    {/* <h1 style={{color: white, paddingTop: '10px', fontSize: '34px', paddingBottom: '0px'}}>
                                        Goals for July:
                                    </h1>
                                    <ol style={{color: white, fontSize: '20px', paddingLeft: '20px'}}>
                                        <li>Enter/start battle by prompting or by being seen/heard</li>
                                        <br/>
                                        <li>Battle using automatic attacks, abilities, and talents</li>
                                        <br/>
                                        <li>Add a battle UI for health bars, status effects, and movesets</li>
                                        <br/>
                                        <li>Apply and implement status effects</li>
                                    </ol> */}
                                </div>
                        </div>
                    </div>
                    <div className = 'slopeEnd' style = {{backgroundColor: purple}}></div>
                </div>
            </div>
        </div>

    )
}