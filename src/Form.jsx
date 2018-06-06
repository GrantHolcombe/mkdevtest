import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Form extends Component {
  render(props) {
    return (
      <Grid container spacing={24} justify="center">
      <Grid item xs={10}>
          <Paper elevation={4} style={{marginTop: '20vh'}}>
          <Typography variant="headline" component="h3" style={{textAlign: 'center'}}>
          Please fill out the form below :)
          </Typography>
            <form onSubmit={this.props.handleSubmit}>
            <Grid container spacing={24} justify="center">
            <Grid item xs={5} spacing={24} justify="center">
              <TextField
                id="name"
                label="Name"
                value={this.props.nameVal}
                onChange={this.props.handleChange}
                margin="normal"
                style={{margin: 10}}
              />
              <TextField
                id="email"
                label="email"
                value={this.props.emailVal}
                onChange={this.props.handleChange}
                margin="normal"
                style={{margin: 10}}
              />
            </Grid>
            <Grid item xs={5} spacing={24}>
              <TextField
                id="msg"
                label="Message"
                multiline
                rowsMax="5"
                value={this.props.msgVal}
                onChange={this.props.handleChange}
                margin="normal"
                style={{margin: 10}}
              />
            </Grid>
            <Grid item xs={10} spacing={24} justify="center">
              <Button variant="outlined" color="primary" type="submit">Submit</Button>
            </Grid>

              </Grid>


            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export { Form };
