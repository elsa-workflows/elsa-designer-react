import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {WorkflowDesigner, WorkflowDesignerProps} from '../components/workflow-designer';

// This default export determines where your story goes in the story list
export default {
    title: 'Example/WorkflowDesigner',
    component: WorkflowDesigner,
    argTypes: {
        model: {control: 'object'}
    }
};

const Template: Story<WorkflowDesignerProps> = (args) => (
    <WorkflowDesigner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    model: {
        name: 'Hello World',
        activities: [
            {
                activityId: 'activity-1',
                type: 'HttpRequestReceived',
                outcomes: ['Done']
            },
            {
                activityId: 'activity-2',
                type: 'WriteHttpResponse',
                outcomes: ['Done']
            },
            {
                activityId: 'activity-3',
                type: 'WriteHttpResponse',
                outcomes: ['Done']
            }],
        connections: [
            {
                sourceId: 'activity-1',
                targetId: 'activity-2',
                outcome: 'Done'
            },
            {
                sourceId: 'activity-1',
                targetId: 'activity-3',
                outcome: 'Done'
            }
        ]
    }
};