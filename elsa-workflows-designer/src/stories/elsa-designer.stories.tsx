import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {ElsaDesigner, ElsaDesignerProps} from '../components/elsa-designer';

// This default export determines where your story goes in the story list
export default {
    title: 'Example/Elsa Designer',
    component: ElsaDesigner,
    argTypes: {
        title: { control: 'text' }
    }
};

const Template: Story<ElsaDesignerProps> = (args) => (
    <ElsaDesigner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: "Primary story"
};