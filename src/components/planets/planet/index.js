/*eslint-disable no-undef*/

import React, {useState, useEffect} from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'
import {Link} from 'react-router-dom'

const Planet = (props) => {
  return (
    <div>
      <h4><Link to={`/planet/${props.id}`}>{props.name}</Link></h4>
      <DescriptionWithLink 
        description={props.description}
        link={props.link}
      />
      <br></br>
      <GrayImg img_url={props.img_url}/>     
    </div>
  )
}

export default Planet   

/*eslint-enable no-undef*/