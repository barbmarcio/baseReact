/*eslint-disable no-undef*/

import React, {useState, useEffect} from 'react'
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/DescriptionWithLink'
import SatelliteForm from '../planet/form'

import { Link, useParams, useHistory, Redirect } from 'react-router-dom'

async function getPlanet(id) {
  let response  = await fetch(`http://localhost:3000/api/${id}.json`)
  let data      = await response.json()
  return data
}

const Planet = () => {
  const [satellite, setSatellite] = useState([])
  const [planet, setPlanet] = useState({});
  const [redirect, setRedirect] = useState(false);

  let { id } = useParams()
  let history = useHistory();

  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellite(data['satellites'])
      setPlanet(data['data'])
    }).catch(e => {
      setRedirect(true);
    })
  }, [])

  const goToPlanets = () => {
    history.push('/')
  }

  const addSatellite = (newSatellite) => {
    setSatellite([...satellite, newSatellite]) 
  }

  if (redirect)
    return <Redirect to='/'/>

  return (
    <div>
      <h4><Link to={'/'}>Go back</Link></h4>
      <button type="button" onClick={goToPlanets}>Go back Button</button>
      <h4>{planet.name}</h4>
      <DescriptionWithLink 
        description={planet.description}
        link={planet.link}
      />
      <br></br>
      <GrayImg img_url={planet.img_url}/>

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