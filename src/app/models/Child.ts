import { Cohort } from './Cohort';
import { Progress } from './Progress';

export interface Child {
    id: number;
    username: string;
    grade: number;
    subscription: boolean;
    progress: Progress[];
    cohort: Cohort;
}
