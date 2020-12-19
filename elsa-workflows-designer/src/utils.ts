import "./extensions";
import {Workflow} from "./models";

export function getChildActivities(workflow: Workflow, parentId?: string) {
    if (!parentId) {
        const targetIds = workflow.connections.map(x => x.targetId).distinct().toLookup(x => x);
        return workflow.activities.filter(x => targetIds[x.activityId] === undefined);
    } else {
        const targetIds = workflow.connections.filter(x => x.sourceId === parentId).map(x => x.targetId).distinct().toLookup(x => x);
        return workflow.activities.filter(x => targetIds[x.activityId] !== undefined);
    }
}