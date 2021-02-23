import React, {Fragment} from 'react'
import Planet from './planet'

const Planets = () => {
  return(
    <Fragment>
      <h3>Planet List</h3>
      <hr/>
      <Planet 
        name="Mercurio" 
        descText="Exercitation sit laborum adipisicing cillum consequat."
        descLink="https://en.wikipedia.org/wiki/Mercury_(planet)"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/220px-Mercury_in_color_-_Prockter07-edit1.jpg"
      />

      <Planet
        name="Pluto"
        descText="Nisi incididunt cillum consequat dolore excepteur occaecat tempor minim exercitation consectetur."
        descLink="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
      />
      
    </Fragment>
  )
}

export default Planets 