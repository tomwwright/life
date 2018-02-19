import * as React from 'react';

import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import { BlurOn as BlurOnIcon, Code as CodeIcon } from 'material-ui-icons';

type LifeAppBarProps = {
  githubUrl: string;
  title: string;
};

export const LifeAppBar: React.StatelessComponent<LifeAppBarProps> = props => (
  <AppBar position="static" style={{ marginBottom: '10px' }}>
    <Toolbar>
      <BlurOnIcon style={{ paddingRight: '10px' }} />
      <Typography variant="title" color="inherit" style={{ flex: 1 }}>
        {props.title}
      </Typography>
      <Button target="about:blank" href={props.githubUrl} style={{ color: 'white' }}>
        <CodeIcon style={{ paddingRight: '10px' }} /> GitHub
      </Button>
    </Toolbar>
  </AppBar>
);
