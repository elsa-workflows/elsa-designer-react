import {Workflow} from "./models";

export type Lookup = {
    [key: string]: any
};

export function distinct<T>(list: Array<T>) {
    return Array.from(new Set(list));
}

export function getChildActivities(workflow: Workflow, parentId?: string) {
    if (parentId == null) {
        const targetIds: Lookup = distinct(workflow.connections.map(x => x.targetId)).reduce((previous, current) => ({[current]: current}), {})
        return workflow.activities.filter(x => targetIds[x.activityId] === undefined);
    } else {
        const targetIds: Lookup = distinct(workflow.connections.filter(x => x.sourceId === parentId).map(x => x.targetId)).reduce((previous, current) => ({[current]: current}), {});
        return workflow.activities.filter(x => targetIds[x.activityId] !== undefined);
    }
}