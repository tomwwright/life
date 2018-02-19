import * as React from 'react';

import { Typography } from 'material-ui';
import { Build as BuildIcon } from 'material-ui-icons';

export const ComingSoon: React.StatelessComponent = () => (
    <Typography component="p" style={{ textAlign: 'center' }}>
        <BuildIcon style={{ paddingRight: '10px' }} />
        Still working on it...
    </Typography>
);