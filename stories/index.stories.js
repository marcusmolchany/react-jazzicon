import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Jazzicon from '../src';

storiesOf('Jazzicon', module)
  .add('with text', () => <Jazzicon diameter={100} seed={Math.random(100).toString()} />);
