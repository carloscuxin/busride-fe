import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//Own components
import { InputTextField } from '../index';
import { Labels } from '../../helpers/messages';

const LoginForm = ({classes, init, typePassword, showPassword, message }) => {
  return (
    <Grid container component="main" className={classes.root} >
        <CssBaseline />
        {/* Imagen left side */}
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        
        {/* Formulario de login */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
            <Typography component="h1" variant="h5">{Labels.general.titlesViews.login}</Typography>
            <form className={classes.form} onSubmit={(e) => init(e)}>
              <InputTextField
                variant="outlined"
                margin="normal"
                fullWidth={true}
                id="user"
                name="user"
                label={Labels.login.forms.user}
                autoFocus={true}
                type="text"
              />
  
              <InputTextField
                variant="outlined"
                margin="normal"
                fullWidth={true}
                id="password"
                name="password"
                label={Labels.login.forms.password}
                type={typePassword}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" onClick={showPassword} />}
                label={Labels.login.forms.showPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {Labels.general.titlesViews.login}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        {message}
      </Grid>
  );
};

export default LoginForm;