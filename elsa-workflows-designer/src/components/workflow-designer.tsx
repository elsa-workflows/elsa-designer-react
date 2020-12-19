import React, {FC} from 'react';
import '../css/elsa.css';
import {Activity, Workflow} from "../models";
import {getChildActivities} from "../utils";
import {ActivityView} from "./activity-view";
import {Lookup} from "../extensions";

export interface WorkflowDesignerProps {
    model: Workflow
}

export const WorkflowDesigner: FC<WorkflowDesignerProps> = ({model, ...props}) => {
    const rootActivities = getChildActivities(model, undefined);
    const renderedActivities: Lookup<string> = {};
    return (
        <>
            <div className="flex flex-1 relative">
                <div id="workflow-canvas" className="flex-1 flex">
                    <div className="flex-1 text-gray-200">
                        <div className="p-10">
                            <div className="canvas select-none">
                                <div className="tree">
                                    <ul>
                                        <li>
                                            <div className="inline-flex flex flex-col items-center">
                                                <button id="start-button"
                                                        type="button"
                                                        className="px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150">
                                                    Start
                                                </button>
                                            </div>
                                            {renderTree(model, rootActivities, true, renderedActivities)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<FlyoutPanel/>*/}
            </div>
        </>
    );
};

function renderOutcomeButton(id: string, outcome: string) {

    const renderOutcome = () => outcome && outcome.length > 0
        ?
        <div className="mb-4 relative z-10 px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-cool-gray-100 text-cool-gray-800 capitalize">{outcome}</div>
        : undefined;

    return (
        <div className="my-6 flex flex-col items-center">
            {renderOutcome()}
            <a key="{id}" id="{id}" href="#">
                <svg className="h-8 w-8 text-gray-400 hover:text-blue-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </a>
        </div>
    );
}

function renderOutcomeButtons(activity: Activity) {
    const activityId = activity.activityId;
    const outcomes = activity.outcomes;

    return (
        <div className="flex flex-row space-x-6">
            {outcomes.map(outcome => renderOutcomeButton(`${activityId}-${outcome}`, outcome))}
        </div>
    );
}

function renderTree(model: Workflow, activities: Array<Activity>, isRoot: boolean, renderedActivities: Lookup<string>) {
    const list = activities.filter(x => renderedActivities[x.activityId] === undefined);
    const cssClass = isRoot ? "root" : undefined;

    for (const activity of list)
        renderedActivities[activity.activityId] = activity.activityId;

    if (list.length == 0)
        return null;

    const renderRootOutcomeButton = (activityId: string) => isRoot ? renderOutcomeButton(`start-button-plus-${activityId}`, '') : undefined;

    const renderChildren = (activityId: string) => {
        const children = getChildActivities(model, activityId);
        return children.length == 0 ? undefined : renderTree(model, children, false, renderedActivities);
    };

    return (
        <ul className={cssClass}>
            {list.map(activity => {

                const activityId = activity.activityId;

                return (
                    <li key={activityId}>
                        <div className="inline-flex flex flex-col items-center">
                            {renderRootOutcomeButton(activityId)}
                            <ActivityView model={activity}/>
                            {renderOutcomeButtons(activity)}
                            {renderChildren(activityId)}
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}