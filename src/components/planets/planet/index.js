import React, {Fragment} from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'

const Planet = (props) => {
  return(
    <div>
      <h4>{props.name}</h4>
      <DescriptionWithLink 
        descText={props.descText}
        descLink={props.descLink}
      />
      <br></br>
      <GrayImg image={props.image}/>
    </div>
  )
}

export default Planet 