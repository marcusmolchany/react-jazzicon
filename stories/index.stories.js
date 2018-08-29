import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';

import Jazzicon, { jsNumberForAddress } from '../src';

const stories = storiesOf('Jazzicon', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('default', () => (
  <Jazzicon diameter={100} seed={number('seed', jsNumberForAddress('0x1111111111111111111111111111111111111111'))} />
));
