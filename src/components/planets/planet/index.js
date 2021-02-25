/*eslint-disable no-undef*/

import React, {useState, useEffect} from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'
import SatelliteForm from '../form/SatelliteForm'

async function searchSatellites(id) {
  let getSatellites     = await fetch(`http://localhost:3000/api/${id}.json`)
  let getSatellitesJson = await getSatellites.json()
  return getSatellitesJson
}

const Planet = (props) => {
  const [satellite, setSatellite] = useState([])

  useEffect(() => {
    searchSatellites(props.id).then(data => {
      setSatellite(data['satellites'])
    })
  }, [])

  const addSatellite = (newSatellite) => {
    setSatellite([...satellite, newSatellite]) 
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <DescriptionWithLink 
        description={props.description}
        link={props.link}
      />
      <br></br>
      <GrayImg img_url={props.img_url}/>

      <h4>Satellites:</h4>

      <hr/>
      <SatelliteForm addSatellite={addSatellite}/>
      <hr/>

      <ul>
        {
          satellite.map((sat, index) => 
            //console.log(sat.name)
            <li key={index}>{sat.name}</li>
          )                
        }     
        
      </ul>
    </div>
  )
}

export default Planet   

/*eslint-enable no-undef*/