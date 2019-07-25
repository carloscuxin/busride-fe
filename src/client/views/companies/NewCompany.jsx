import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Own components
import { Labels } from '../../helpers/messages';
import * as Input from '../../components/inputs';
import styles from './styles';

const NewCompany = (props) => {
  const classes = styles();
  const errors = props.errors;
  const errorsObject = {
    business_name: (errors.args) ? errors.data.filter(err => err.input === "business_name")[0] : null,
    commercial_name: (errors.args) ? errors.data.filter(err => err.input === "commercial_name")[0] : null,
    phone: (errors.args) ? errors.data.filter(err => err.input === "phone")[0] : null,
    email: (errors.args) ? errors.data.filter(err => err.input === "email")[0] : null,
    web_page: (errors.args) ? errors.data.filter(err => err.input === "web_page")[0] : null,
  }
  
  return (
    <form id="form_newCompany" className={classes.container} autoComplete="off">
      {/* Input business_name */}
      <Grid container spacing={3}>
        <Grid item xs>
          <Input.TextField
            onChange={props.getDataCompany()}
            label={Labels.companies.forms.labels.businessName}
            name="business_name"
            id="company_business_name"
            variant="standard"
            fullWidth={true}
            margin="dense"
            type="text"
          />
          <Typography variant="caption" color="error" display="block" gutterBottom style={{visibility: errors.visibility}}>
            { (errorsObject.business_name !== undefined && errorsObject.business_name !== null ) ? errorsObject.business_name.message : '' }
          </Typography>
        </Grid>
      </Grid>

      {/* Input commercial_name */}
      <Grid container spacing={3}>
        <Grid item xs>
          <Input.TextField 
            onChange={props.getDataCompany()}
            label={Labels.companies.forms.labels.commercialName}
            name="commercial_name"
            id="company_commercial_name"
            variant="standard"
            fullWidth={true}
            margin="dense"
            type="text"
          />
          <Typography variant="caption" color="error" display="block" gutterBottom style={{visibility: errors.visibility}}>
            { (errorsObject.commercial_name !== undefined && errorsObject.commercial_name !== null ) ? errorsObject.commercial_name.message : '' }
          </Typography>
        </Grid>
      </Grid>

      {/* Input phone y email */}
      <Grid container spacing={3}>
        <Grid item xs>
          <Input.TextField
            onChange={props.getDataCompany()}
            label={Labels.companies.forms.labels.phone}
            name="phone"
            id="company_phone"
            variant="standard"
            fullWidth={true}
            margin="dense"
            type="number"
          />
          <Typography variant="caption" color="error" display="block" gutterBottom style={{visibility: errors.visibility}}>
            { (errorsObject.phone !== undefined && errorsObject.phone !== null ) ? errorsObject.phone.message : '' }
          </Typography>
        </Grid>
        <Grid item xs>
          <Input.TextField
            onChange={props.getDataCompany()}
            label={Labels.companies.forms.labels.email}
            name="email"
            id="company_email"
            variant="standard"
            fullWidth={true}
            margin="dense"
            type="email"
          />
          <Typography variant="caption" color="error" display="block" gutterBottom style={{visibility: errors.visibility}}>
            { (errorsObject.email !== undefined && errorsObject.email !== null ) ? errorsObject.email.message : '' }
          </Typography>
        </Grid>
      </Grid>

      {/* Input web_page */}
      <Grid container spacing={3}>
        <Grid item xs>
          <Input.TextField
            onChange={props.getDataCompany()}
            label={Labels.companies.forms.labels.webPage}
            name="web_page"
            id="company_web_page"
            variant="standard"
            fullWidth={true}
            margin="dense"
            type="text"
          />
          <Typography variant="caption" color="error" display="block" gutterBottom style={{visibility: errors.visibility}}>
            { (errorsObject.web_page !== undefined && errorsObject.web_page !== null ) ? errorsObject.web_page.message : '' }
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
}

export default NewCompany;