import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";

const MaterialFormComponent = (props) => {
  const initialValues = {
      fullName: "",
      email: "",
      message: ""
  };
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues({
        ...formValues,
        [name]: value,
    });
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
    return (
      <Card elevation={4} 
        sx={{width: "100%", height: "400px", borderRadius: "5px", border: "2px solid white", background: "transparent"}}
      > 
            <form onSubmit={handleSubmit} >
              <Grid container sx={{ border: "2px solid blue", gap: "15px"}} alignItems="center" justifyContent="center" direction="column" >
                  <Grid item>                      
                      <TextField
                        sx={{width: "450px",  background: "white", borderRadius: "5PX", boxShadow: 5}}
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        type="text"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                      />
                  </Grid>
                  <Grid item>
                      <TextField
                        sx={{color: "red", width: "450px",  background: "white", borderRadius: "5PX", boxShadow: 9}}
                        id="email"
                        name="email"
                        label="Email"
                        type="text"
                        value={formValues.email}
                        onChange={handleInputChange}
                        multiline
                      />
                  </Grid>
                
                  <Grid item>
                    <TextField
                      sx={{width: "450px",  background: "white", borderRadius: "5PX", boxShadow: 9}}
                      id="message"
                      name="message"
                      label="Message"
                      type="text"
                      value={formValues.message}
                      onChange={handleInputChange}
                      multiline
                      rows={5}
                    />
                  </Grid>
              </Grid>

              <Grid container sx={{ marginTop:"20PX", height:"100%", border: "2px solid black"}} alignItems="center" direction="column" >
                <Grid item>
                    <Button variant="contained" color="primary" type="submit" style={{
                        backgroundColor: "green",
                        margin: "5px"
                    }}>
                        Send Message
                    </Button>
                </Grid>
                </Grid>

            </form>
      </Card>

    );
}
export default MaterialFormComponent;