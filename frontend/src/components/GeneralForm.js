import { useState } from 'react'
import { useGeneralsContext } from '../hooks/useGeneralsContext'

const GeneralForm = () => {
  const { dispatch } = useGeneralsContext()

  const [position, setPosition] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const general = {position, phone, email}
    
    const response = await fetch('/api/generals', {
      method: 'POST',
      body: JSON.stringify(general),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setPosition('')
      setPhone('')
      setEmail('')
      dispatch({type: 'CREATE_GENERAL', payphone: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>General Info Edit</h3>

      <label>Current Position:</label>
      <input 
        type="text" 
        onChange={(e) => setPosition(e.target.value)} 
        value={position}
        className={emptyFields.includes('position') ? 'error' : ''}
      />

      <label>Phone:</label>
      <input 
        type="text" 
        onChange={(e) => setPhone(e.target.value)} 
        value={phone}
        className={emptyFields.includes('phone') ? 'error' : ''}
      />

      <label>Email:</label>
      <input 
        type="text" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className={emptyFields.includes('email') ? 'error' : ''}
      />

      <button>Add General</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default GeneralForm