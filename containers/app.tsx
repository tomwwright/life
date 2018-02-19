import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Typography } from 'material-ui';

import { LifeAppBar } from '../components/appbar';
import { ComingSoon } from '../components/comingsoon';
import { Footer } from '../components/footer';

const App: React.StatelessComponent<{
}> = props => (
  <div>
    <div style={{ minHeight: '100%', maxWidth: '100%' }}>
      <LifeAppBar title="Life" githubUrl="https://github.com/tomwwright/life" />
      <ComingSoon />
      <div style={{ height: '70px' }} />
    </div>
    <Footer>
      <Typography variant="caption" component="p" style={{ textAlign: 'center' }}>
        Life by Tom Wright{' '}
      </Typography>
      <Typography variant="caption" component="p" style={{ textAlign: 'center' }}>
        <a style={{ color: 'inherit' }} href="https://tomwwright.com">
          tomwwright.com
        </a>
      </Typography>
    </Footer>
  </div>
);

export default inject()(observer(App));
