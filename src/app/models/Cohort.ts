import { DueDate } from './DueDate';

export interface Cohort {
    id: number;
    name: string;
    week: number;
    activity?: string;
    dueDates: DueDate[];
}
