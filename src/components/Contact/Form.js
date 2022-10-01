import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#217276',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#217276',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#217276',
    },
    '&:hover fieldset': {
      borderColor: '#217276',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#217276',
    },
  },
});

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
      <Card elevation={5} 
        sx={{
          width: "100%",
          padding:"50px", 
          height: "450px", 
          borderRadius: "20px", 
		  '@media screen and (max-width: 500px)': {
            padding:"20px",
          } 
		}}
      > 
            <form onSubmit={handleSubmit} >
              <Grid container 
                sx={{ 
				  overflow: "auto",
                  display: "flex", 
                  alignItems:"center",
                  gap: "15px", 
                  width: "100%",
                  '@media screen and (max-width: 500px)': {
                    width: "200px",
                    alignItems:"center",
                  } 
                }} 
                alignItems="center" justifyContent="center" direction="column" >
                  <Grid item>
                      
                      <CssTextField
                        sx={{
                          marginTop: "10px",
                          width: "450px", 
                          background: "white", 
                          borderRadius: "5PX", 
                          boxShadow: 4,
                          '@media screen and (max-width: 500px)': {
                            width: "200px",
                          } 
                        }}
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        type="text"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                      />
                  </Grid>
                  <Grid item>
                      <CssTextField
                        sx={{width: "450px",  background: "white", borderRadius: "5PX", boxShadow: 4}}
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
                    <CssTextField
                      sx={{width: "450px",  background: "white", borderRadius: "5PX", boxShadow: 4}}
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

              <Grid container sx={{ marginTop:"20PX", height:"100%"}} alignItems="center" direction="column" >
                <Grid item>
                    <Button variant="contained" color="primary" type="submit" style={{
                        background: "#f3a415",
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
