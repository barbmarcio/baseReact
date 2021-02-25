import React, {Fragment} from 'react'

const DescriptionWithLink = (props) => {
  return(
    <>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </>
  )
}

export default DescriptionWithLink