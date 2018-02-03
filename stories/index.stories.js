import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Fancy from 'styled-grid-components/Fancy'
import { Button, Welcome } from '@storybook/react/demo';
console.log(Fancy, 'alskdjflkj')
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Fancy', module).add('This is linked frpm NPM ;)', () => <Fancy />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
