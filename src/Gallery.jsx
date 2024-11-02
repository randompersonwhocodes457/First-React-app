import leads from './assets/leadsapp.png'
import basketball from './assets/basketballapp.png'
import password from './assets/passwordgeneratorapp.png'
import units from './assets/unitconversionapp.png'

export default function Gallery(){
    return(
        <>
            <p>These are examples of projects I've done so far</p>
            <div id="gallery">
                <img src={leads} alt="leads app browser" />
                <img src={basketball} alt="basketball score keeper" />
                <img src={password} alt="random password generator" />
                <img src={units} alt="unit converter app" />
            </div>
        </>
    )
}