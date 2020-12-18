export interface Workflow {
    name: string
    activities: Array<Activity>
    connections: Array<Connection>
}

export interface Activity {
    activityId: string
    type: string
    outcomes: Array<string>
}

export interface Connection{
    sourceId: string
    targetId: string
    outcome: string
}