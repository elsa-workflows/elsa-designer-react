import React, {FC} from 'react';
import '../css/elsa.css';
import {Workflow} from "../models";

export interface ElsaDesignerProps {
    title?: string
    model: Workflow
}

export const ElsaDesigner: FC<ElsaDesignerProps> = ({title = "Untitled", ...props}) => {
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
                                            {/*@RenderTree(GetRootActivities(), true, OnAddActivityClick, renderedActivities)*/}
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