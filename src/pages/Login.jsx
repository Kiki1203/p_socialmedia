import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import InputAdornment from '@mui/material/InputAdornment';
import MuiFormControlLabel from '@mui/material/FormControlLabel';

// ** Icons Imports
import Google from 'mdi-material-ui/Google';
import EyeOutline from 'mdi-material-ui/EyeOutline';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';

export class Login extends React.Component {
  state = {
    error: null,
    regPassShow: <EyeOffOutline fontSize="small" />,
    regPassType: 'password',
  };

  btShowPassRegis = () => {
    if (this.state.regPassType === 'password') {
      this.setState({
        regPassShow: <EyeOutline fontSize="small" />,
        regPassType: 'text',
      });
    } else {
      this.setState({
        regPassShow: <EyeOffOutline fontSize="small" />,
        regPassType: 'password',
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid " style={{ backgroundColor: '#F4F5FA', height: '135vh' }}>
          <div className="row">
            <div className="col-8">
              <h1>Logo</h1>
            </div>
            <div className="col-4 pt-5 card">
              <div style={{ padding: '40px' }}>
                <div>
                  <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
                      Lorem ipsum dolor sit.👋🏻
                    </Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
                  </Box>
                  <form noValidate autoComplete="off">
                    <TextField fullWidth type="email" label="Email" sx={{ marginBottom: 4 }} />
                    <FormControl fullWidth sx={{ marginBottom: 4 }}>
                      <InputLabel htmlFor="auth-register-password">Password</InputLabel>
                      <OutlinedInput
                        label="Password"
                        type={this.state.regPassType}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton edge="end" onClick={this.btShowPassRegis}>
                              {this.state.regPassShow}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>

                    <MuiFormControlLabel
                      sx={{ marginBottom: 3 }}
                      control={<Checkbox />}
                      label={
                        <div>
                          <span>Remember Me</span>
                          <Link to="" style={{ textDecoration: 'none' }}>
                            <span>Forgot Password?</span>
                          </Link>
                        </div>
                      }
                    />
                    <Button fullWidth size="large" type="submit" variant="contained" sx={{ marginBottom: 4 }}>
                      Sign up
                    </Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Typography variant="body2" sx={{ marginRight: 2 }}>
                        Don't have an account?
                      </Typography>
                      <Typography variant="body2">
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                          Create an account
                        </Link>
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 3 }}>or</Divider>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Link to="/" style={{ textDecoration: 'none' }}>
                        <button class="btn btn-white">
                          <Google sx={{ color: '#db4437' }} />
                          <span class="mx-4">Continue With Google</span>
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
