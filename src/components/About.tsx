import React, { Component } from 'react';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faDownload } from '@fortawesome/free-solid-svg-icons';
import { IfcResumeBasics } from '../interfaces/IfcResumeBasics';

library.add(fas, faDownload);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

interface IfcStyles extends WithStyles<typeof styles> {
  root?: string;
  paper?: string;
}

class About extends Component<IfcStyles & IfcResumeBasics> {
  render() {
    const {
      classes,
      basics: {
        name,
        email,
        summary,
        location: { city, region },
        resumeDownload,
      },
    } = this.props;

    return (
      <Container maxWidth="md" id="component-about" className={classes.root}>
        <h3>About me</h3>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>{summary}</p>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <h3>Contact me</h3>
              <p>
                <span>{name}</span>
                <br />
                <span>
                  {city}, {region}
                </span>
                <br />
                <span>
                  <a href={`mailto:${email}`}>{email}</a>
                </span>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Button variant="contained" href={resumeDownload}>
                <FontAwesomeIcon icon={['fas', 'download']} />
                &nbsp;Lastest resume
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(About);
