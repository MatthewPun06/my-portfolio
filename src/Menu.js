import './App.css'
import App, { PageName } from './App.js';
export default function Page({setCurrentPage}) {
  return (
    <div style={{
        backgroundColor: '#1a1a2a',
        color: '#fafaff',
        fontFamily: 'Oxygen',
        position: 'relative',
        padding: '80px',
    }}>
        <h1 style={{ margin: 0 }}>
            m a t t h e w &nbsp; p u n
            <hr />
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
            <button className = {'my-button'} style = {{fontFamily: 'Oxygen', marginLeft: '0px', fontSize: '32px'}} onClick={() => setCurrentPage(PageName.HOME)}>p o r t f o l i o</button>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}>
                <button className={'my-button'} onClick={() => setCurrentPage(PageName.RESUME)}>
                    r é s u m é
                </button>
                <button className={'my-button'} onClick={() => setCurrentPage(PageName.RESUME)}>
                    p r o j e c t s
                </button>
                <button className={'my-button'} onClick={() => setCurrentPage(PageName.DEVLOG)}>
                    d e v l o g
                </button>
                <button className={'my-button'} onClick={() => setCurrentPage(PageName.CONTACT)}>
                    c o n t a c t
                </button>
            </div>
            </div>
        </h1>
    </div>
  )
}
