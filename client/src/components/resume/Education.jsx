import React, { Component } from "react";
import {TextField,Button,Container,Divider,TableBody,TableRow,TableCell,TableContainer,Table} from "@mui/material";
import { Card, CardHeader, CardContent } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SchoolIcon from "@mui/icons-material/School";
import DateRangeIcon from "@mui/icons-material/DateRange";
import InputAdornment from "@mui/material/InputAdornment";
import { Paper, Grid } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import GetAppIcon from "@mui/icons-material/GetApp"


const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});



class Education extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values } = this.props;
    const { classes } = this.props;

    return (
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Education Details" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center">
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                      margin="dense"
                      label="College/University"
                      variant="outlined"
                      style={{ width: "80%" }}
                      name="collegename"
                      required
                      value={values.collegename}
                      onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="degree"
                  required
                  value={values.degree}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="collegestart"
                  label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.collegestart}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="collegeend"
                  type="date"
                  label="To Year"
                  style={{ width: "80%" }}
                  required
                  value={values.collegeend}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center">
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  margin="dense"
                  label="School"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="school1"
                  required
                  value={values.school1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="hsc"
                  required
                  value={values.hsc}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="hscstart"
                  label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.hscstart}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                {/* <CustomDatePicker
                  name={'toyear2'}
                  label={'To Year'}
                  value={values.toyear2}
                /> */}
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="hscend"
                  label="To Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.hscend}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center">
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                 margin="dense"
                 label="School"
                 variant="outlined"
                 style={{ width: "80%" }}
                 name="school2"
                 required
                 value={values.school2}
                 onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="ssc"
                  required
                  value={values.ssc}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="sscstart"
                  label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.sscstart}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                {/* <CustomDatePicker
                  name={'toyear2'}
                  label={'To Year'}
                  value={values.toyear2}
                /> */}
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="sscend"
                  label="To Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.sscend}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

            </Grid>
          </div>
        </CardContent>
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
                      sx={{ml:15  }}
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
        <p className="text-center text-muted">Page 2</p>
      </Paper>
    );
  }
}

export default withStyles(styles)(Education);
