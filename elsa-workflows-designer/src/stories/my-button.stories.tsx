import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { MyButton } from '../components/my-button';

// This default export determines where your story goes in the story list
export default {
    title: 'MyButton',
    component: MyButton,
};

const Template: Story<ComponentProps<typeof MyButton>> = (args) => (
    <MyButton label="Click me!" />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
    /* the args you need here will depend on your component */
};