import React from 'react';
import { storiesOf } from '@storybook/react';
import <%= nameUp %> from '.';

storiesOf('<%= nameUp %>', module)
	.add('Basic', () => (
		<<%= nameUp %> />
	));