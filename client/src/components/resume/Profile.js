import React, {Component} from 'react';
import {TextField,Button,Container,TableBody,TableRow,TableCell,TableContainer,Table} from "@mui/material";
import { Card, CardHeader, CardContent } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InputAdornment from '@mui/material/InputAdornment';
import { Paper, Grid } from "@mui/material";


import withStyles from '@mui/styles/withStyles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Profile extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  render () {
    const {values} = this.props;
    const {classes} = this.props;
    return (
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Personal Details" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="firstname"
                  label="First Name"
                  style={{width: '80%'}}
                  required
                  value={values.firstname}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Last Name"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="lastname"
                  required
                  value={values.lastname}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  name="email"
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.email}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.phone}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="Address"
                  variant="outlined"
                  name="address"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.address}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
<Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="About Me"
                  variant="outlined"
                  name="aboutme"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.aboutme}
                  onChange={this.props.handleChange}
                  
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Pinterest"
                  variant="outlined"
                  name="pinterest"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.pinterest}
                  onChange={this.props.handleChange}
                  
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="GitHub"
                  variant="outlined"
                  name="github"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.github}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <GitHubIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Linked In"
                  variant="outlined"
                  name="linkedin"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.linkedin}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkedInIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Twitter"
                  variant="outlined"
                  name="twitter"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.twitter}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Facebook"
                  variant="outlined"
                  name="facebook"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.facebook}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FacebookIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Instagram"
                  variant="outlined"
                  name="instagram"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.instagram}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <InstagramIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Container className={classes.margin}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.back}
                      sx={{ ml: 15 }}
                      startIcon={<NavigateBeforeIcon />}
                    >
                      Back
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.continue}
                      endIcon={<NavigateNextIcon />}
                    >
                      Next
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
            </Container>
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={this.createAndDownloadPDF}
              endIcon={<GetAppIcon />}
            >
              Generate PDF
            </Button> */}
          </div>
        </CardContent>
        <p className="text-center text-muted">Page 1 </p>
      </Paper>
    );
  }
}

export default withStyles (styles) (Profile);
