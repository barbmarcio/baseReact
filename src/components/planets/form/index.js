import React, {useState, useEffect} from 'react'

const innitialState = {
  name: '',
  description: '',
  link: '',
  img_url: ''
}

const Form = (props) => {
  const [fields, setFields] = useState(innitialState)
  const handleFieldsChange = event => setFields({
    ...fields,
    [event.target.name]: event.target.value,
  })

  const handleSubmit = event => {
    props.addPlanet(fields)
    event.preventDefault()
    setFields(innitialState)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" value={fields.name} name="name"
           onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input id="description" type="text" value={fields.description} name="description"
           onChange={handleFieldsChange}/>
        </div> 
        <div>
          <label htmlFor="link">Link: </label>
          <input id="link" type="text" value={fields.link} name="link"
           onChange={handleFieldsChange}/>
        </div>  
        <div>
          <label htmlFor="img_url">Imagem: </label>
          <input id="img_url" type="text" value={fields.img_url} name="img_url"
           onChange={handleFieldsChange}/>
        </div>  
        <button type="submit">Go</button>
      </form> 
    </>
  )
}

export default Form