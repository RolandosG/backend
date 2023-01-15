import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const RegistrationForm = () => 
{
  const [formData, setFormData] = useState({
    first_name : "",
    last_name : "",
    email: "",
    password: "",
    confirmPassword : ""
});

const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

      
          '& .MuiTextField-root': {

            width: '300px',
          },
          '& .MuiButtonBase-root': {

          },
        },
}));
      
const onCreateAccount = (evt)=>{

  evt.preventDefault();


  fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/`,{
      method :"POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify(formData)
  })
  .then(response=>response.json())
  .then(json=>{

        alert(json.message);
        setFormData({
          first_name : "",
          last_name : "",
          email: "",
          password: "",
          confirmPassword : ""
      })

  })
  .catch(err=>{
      console.log(`Error ${err}`)
  })
}


    return (
      <section id="register-section">
        <form action="" onSubmit={onCreateAccount}>
          <TextField
            label="first_name"
            variant="filled"
            required
            id="first_name"
            value={formData.first_name}
            onChange={(evt)=> setFormData({...formData, first_name : evt.target.value})}
          />
          <TextField
            label="Last_name"
            variant="filled"
            required
            id="last_name"
            value={formData.last_name}
            onChange={(evt)=> setFormData({...formData, last_name : evt.target.value})}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            id="email"
            value={formData.email}
            onChange={(evt)=> setFormData({...formData, email : evt.target.value})}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            id="password"
            value={formData.password}
            onChange={(evt)=> setFormData({...formData, password : evt.target.value})}
          />
          <div>
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            id="password"
            value={formData.password}
            onChange={(evt)=> setFormData({...formData, ConfirmPassword : evt.target.value})}
          />
            <Button variant="contained">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
        </section>
      );
}
export default RegistrationForm
