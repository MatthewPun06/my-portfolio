import resume from './assets/Matthew_Pun_Resume.pdf'
import starrysky from './assets/AcadiaMorning.jpeg'
export default function Page() {
    return (
        <div style = {{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1500px', overflow: 'hidden'}}>
            <img src = {starrysky} style = {{position: 'absolute', height: '1500px', zIndex: '-1'}}/>
            <div style = {{}}>
                <iframe src={`${resume}#zoom=100`} style = {{height: '1115px', width: '1120px'}}> </iframe>
            </div>
        </div>
    )
}