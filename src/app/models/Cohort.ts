export interface Cohort {
    id: number;
    name: string;
    week: string;
    activity?: string;
}

export interface SelectableCohort extends Cohort {
    selected: boolean;
}

export interface ChildrenInCohort extends Cohort {
    dueDates?: {};
    children: [];
}
