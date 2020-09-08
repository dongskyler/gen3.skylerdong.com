import React, { Component } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
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
  });

interface IfcStyles extends WithStyles<typeof styles> {
  root?: string;
  paper?: string;
}

class About extends Component<IfcStyles & IfcResumeBasics> {
  render() {
    const {
      classes,
      basics: { summary, resumeDownload },
    } = this.props;

    return (
      <Container maxWidth="md" id="component-about" className={classes.root}>
        <Grid container spacing={2} item xs={12}>
          <Grid item xs={12} md={3}>
            <h3>About me</h3>
          </Grid>
          <Grid item xs={12} md={9}>
            <p>{summary}</p>
            <Button
              variant="contained"
              href={resumeDownload}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={['fas', 'download']} />
              &nbsp;Latest resume
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(About);
