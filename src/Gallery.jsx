import leads from './assets/leadsapp.png'
import basketball from './assets/basketballapp.png'
import password from './assets/passwordgeneratorapp.png'
import units from './assets/unitconversionapp.png'

export default function Gallery(){
    return(
        <div id="gallery">
            <img src={leads} alt="" />
            <img src={basketball} alt="" />
            <img src={password} alt="" />
            <img src={units} alt="" />
        </div>
    )
}