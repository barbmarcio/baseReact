import React, {Fragment} from 'react'

const DescriptionWithLink = (props) => {
  return(
    <Fragment>
      <p>{props.descText}</p>
      <a href={props.descLink}>{props.descLink}</a>
    </Fragment>
  )
}

export default DescriptionWithLink