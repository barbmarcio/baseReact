/*eslint-disable no-undef*/

import React, {useState, useEffect } from 'react'
import Planet from './planet'
import Form from './form'

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let responseJson = await response.json()
  return responseJson
}

const Planets = () => { 
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet])
  }

  return(
    <>
      <h3>Planet List</h3>
      <hr/>
      <Form addPlanet={addPlanet}/>
      <hr/>
      {          
        planets.map(
          (planet, index) => 
            <Planet 
            id={planet.id}
            name={planet.name}
            description={planet.description}
            link={planet.link}
            img_url={planet.img_url}              
            key={index}
            />  
        )
      }
    </>     
  )
}

export default Planets 

/*eslint-enable no-undef*/