import React, { Component } from 'react';
import { Container, Grid, LinearProgress, Paper } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faAward } from '@fortawesome/free-solid-svg-icons';
import { IfcResumeProjects } from '../interfaces/IfcResumeProjects';
import { IfcResumeEducation } from '../interfaces/IfcResumeEducation';
import { IfcResumeSkills } from '../interfaces/IfcResumeSkills';
import { createListItems } from '../lib/tsxHelpers';

library.add(fas, faAward);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  });

interface IfcStyles extends WithStyles<typeof styles> {
  root?: string;
  paper?: string;
}

class Resume extends Component<
  IfcStyles & IfcResumeEducation & IfcResumeProjects & IfcResumeSkills
> {
  render() {
    const { classes, education, projects, skills } = this.props;

    const createEducationList = education.map((e, i) => (
      <Grid item xs={12} key={i}>
        <Paper className={classes.paper}>
          <h4>{e.institution}</h4>
          <div>
            <span>{e.studyType}</span>
            <span> in </span>
            <span>{e.area}</span>
            <span>
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={['fas', 'award']} />
              &nbsp;&nbsp;
            </span>
            <span>{e.startDate}</span>
            <span>&nbsp;&mdash;&nbsp;</span>
            <span>{e.endDate}</span>
          </div>
        </Paper>
      </Grid>
    ));

    const projectList = projects.map((p, i) => (
      <Grid item xs={12} key={i}>
        <Paper className={classes.paper}>
          <a href={p.website} target="_blank" rel="noreferrer noopener">
            <h4>{p.name}</h4>
          </a>
          <div>{p.summary}</div>
          <div>
            <ul>{createListItems(p.highlights)}</ul>
          </div>
        </Paper>
      </Grid>
    ));

    const BorderLinearProgress = withStyles((theme: Theme) =>
      createStyles({
        root: {
          height: 10,
          borderRadius: 5,
        },
        colorPrimary: {
          backgroundColor:
            theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
          borderRadius: 7,
          backgroundColor: '#7f8d8bff',
        },
      })
    )(LinearProgress);

    const skillList = skills.map((s, i) => (
      <Grid item xs={12} key={i}>
        <h4>{s.name}</h4>
        <BorderLinearProgress variant="determinate" value={s.level} />
      </Grid>
    ));

    return (
      <Container maxWidth="md" id="component-resume" className={classes.root}>
        <hr />
        <Grid container spacing={2} item xs={12}>
          <Grid item xs={12} md={3}>
            <h3>Education</h3>
          </Grid>
          <Grid container spacing={2} item xs={12} md={9}>
            {createEducationList}
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2} item xs={12}>
          <Grid item xs={12} md={3}>
            <h3>Projects</h3>
          </Grid>
          <Grid container spacing={2} item xs={12} md={9}>
            {projectList}
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2} item xs={12}>
          <Grid item xs={12} md={3}>
            <h3>Skills</h3>
          </Grid>
          <Grid container spacing={2} item xs={12} md={9}>
            {skillList}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Resume);
