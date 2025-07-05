import React, {useState, useEffect} from 'react';
import './App.css'
import App, { PageName } from './App.js';
export default function Page({setCurrentPage}) {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1125) {
            setMenuOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
        <nav
      style={{
        backgroundColor: '#1a1a2a',
        display: 'flex',
        flexDirection: 'column',
        color: '#fafaff',
        fontFamily: 'Oxygen',
        position: 'relative',
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingLeft: '5%',
        paddingRight: '5%',
        zIndex: '1000'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', width: "100%"}}>m a t t h e w &nbsp; p u n<hr style={{marginBottom: '10px'}}/>
            <div style = {{display: 'flex', alignItems: 'center'}}>
                <div style= {{width: '250px'}}>
                    <button className="my-button" onClick={() => {setCurrentPage(PageName.HOME); setMenuOpen(false)}} style = {{marginLeft: '0px', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Oxygen'}}>p o r t f o l i o</button>
                </div>
                <div className = 'menuNavBar'>
                    <div style = {{}}>
                        <div>
                            {/* Hamburger Icon */}
                            <div
                            className="hamburger"
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                cursor: 'pointer',
                                display: 'none',
                                flexDirection: 'column',
                                gap: '6px',
                            }}
                            >
                            <div style={{ width: '25px', height: '3px', backgroundColor: '#fafaff' }}></div>
                            <div style={{ width: '25px', height: '3px', backgroundColor: '#fafaff' }}></div>
                            <div style={{ width: '25px', height: '3px', backgroundColor: '#fafaff' }}></div>
                            </div>
                        </div>
                        {/* Menu Links */}
                        <div className={`menu ${menuOpen ? 'open' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <button className="my-button" onClick={() => {setCurrentPage(PageName.RESUME); setMenuOpen(false)}}>r é s u m é</button>
                            {menuOpen && <hr className="navhr open" />}
                            <button className="my-button" onClick={() => {setCurrentPage(PageName.PROJECTS); setMenuOpen(false)}}>p r o j e c t s</button>
                            {menuOpen && <hr className="navhr open" />}
                            <button className="my-button" onClick={() => {setCurrentPage(PageName.DEVLOG); setMenuOpen(false)}}>d e v l o g</button>
                            {menuOpen && <hr className="navhr open" />}
                            <button className="my-button" onClick={() => {setCurrentPage(PageName.CONTACT); setMenuOpen(false)}}>c o n t a c t</button>
                        </div>
                    </div>
                </div>
            </div>
        </h1>
      </div>
    </nav>
    )
}