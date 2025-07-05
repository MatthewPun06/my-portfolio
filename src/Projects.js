import BambooForest from './assets/BambooForest.jpeg'
export default function Page () {
    return (
        <div style = {{display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', width: '100%', height: '1000px', overflow: 'hidden'}}>
            <img src = {BambooForest} style = {{width: '3000px', position: 'absolute', display: 'inline-block', zIndex: '-1'}}/>
            <div style = {{width: '60%', height: '40%', backgroundColor: '#1a1a2a', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Monospace', border: 'solid', borderColor: '#fafaff', borderWidth: '5px'}}>
                <h1 style= {{fontSize: '50px', color: '#fafaff', textAlign: 'center'}}>
                    🚧 Under Construction 🚧
                </h1>
            </div>
        </div>
    )
}