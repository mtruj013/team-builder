//To Do
//set use state for team member list
//import uuid
//initialize team members
import React, {useState} from 'react';
import './App.css';
import { v4 as uuid} from 'uuid';
import Form from './Form'

//this is the data that gets passed as state
const initialTeamMembers = [
  {id: uuid(), name: 'Tom', email: 'example1@example.com', role: 'PL'},
  {id: uuid(), name: 'Mary', email: 'example2@example.com', role: 'UI'}
]


function App() {

  const [teamMembers, setTeamList] =useState(initialTeamMembers);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: ''
  })
  console.log(teamMembers);

  const onInputChange = event => {
    const changedInput = event.target.name
    const newInputValue = event.target.value 

    setFormValues({
      ...formValues,
      [changedInput]: newInputValue,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault()

    const newTeamMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }
    setTeamList([...teamMembers, newTeamMember])
  }


  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />

      <h2>Team Member List</h2>
      {
        teamMembers.map(form => 
        <div key={form.id}> 
          {form.name} {form.email} {form.role}
        </div>)
      }
    </div>
  );
}

export default App;
