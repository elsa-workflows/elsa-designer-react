import React, {ComponentProps} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {ActivityView, ActivityViewProps} from "../components/activity-view";
import {Activity} from "../models";

export default {
    title: 'Example/ActivityView',
    component: ActivityView,
    argTypes: {
        model: {control: 'object'}
    }
};

const Template: Story<ActivityViewProps> = (args) => (
    <ActivityView {...args} />
);

const SampleActivity: Activity = {
    activityId: 'activity-1',
    type: 'WriteLine',
    outcomes: ['Done']
};

export const Primary = Template.bind({});
Primary.args = {model: SampleActivity};