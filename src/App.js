import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

const [formData, setFormData] = useState({
  fname: '',
  lname: '',
  email: '',
  phone: '',
});

const inputEvent = (event) => {
  console.log(event.target.value);
  // setFormData(event.target.value);
  const name = event.target.name;
  const value = event.target.value;

  setFormData((prevValue)=>{
    if(name === 'fName'){
      return{
        fname: value,
        lname: prevValue.lname,
        email: prevValue.email,
        phone: prevValue.phone,
      }
    }else if(name === 'lName'){
      return{
        fname: prevValue.fname,
        lname: value,
        email: prevValue.email,
        phone: prevValue.phone,
      }
    }else if(name === 'email'){
      return{
        fname: prevValue.fname,
        lname: prevValue.lname,
        email: value,
        phone: prevValue.phone,
      }
    }else if(name === 'phone'){
      return{
        fname: prevValue.fname,
        lname: prevValue.lname,
        email: prevValue.email,
        phone: value,
      }
    }
  })
}

  return (
    <div className="App">
      <h1>{formData.fname} {formData.lname}</h1>
      <h2>{formData.email}</h2>
      <h3>{formData.phone}</h3>
      <form>
        <input type="text" name="fName" onChange={inputEvent} value={formData.fname} placeholder="First Name"/><br/>
        <input type="text" name="lName" onChange={inputEvent} value={formData.lname} placeholder="Last Name"/><br/>
        <input type="email" name="email" onChange={inputEvent} value={formData.email} placeholder="Email ID"/><br/>
        <input type="number" name="phone" onChange={inputEvent} value={formData.phone} placeholder="Mobile No"/><br/>
        <button type="submit">Submit 👍</button>
      </form>
    </div>
  );
}

export default App;
