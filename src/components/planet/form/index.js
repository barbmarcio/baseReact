import React, {useState, useEffect} from 'react'

const innitialValues = {
  name: ''
}

const SatelliteForm = (props) => {
  const [fields, setFields] = useState(innitialValues)
  const handleFieldsChange = event => setFields({
    ...fields,
    [event.target.name]: event.target.value
  })
  const handleSubmit = event => {
    props.addSatellite(fields)
    event.preventDefault()
    setFields(innitialValues)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" value={fields.name} 
          onChange={handleFieldsChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )  
}

export default SatelliteForm
