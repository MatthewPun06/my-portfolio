import './App.css'
export default function Page() {
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
            <span>p o r t f o l i o</span>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}>
                <button className={'my-button'}>
                    r é s u m é
                </button>
                <button className={'my-button'}>
                    p r o j e c t s
                </button>
                <button className={'my-button'}>
                    d e v l o g
                </button>
                <button className={'my-button'}>
                    c o n t a c t
                </button>
            </div>
            </div>
        </h1>
    </div>
  )
}
