export interface Child {
    id: number;
    username: string;
    grade: number;
    subscription: boolean;
    progress: {
        reading: boolean;
        writing: boolean;
        drawing: boolean;
        teamReview: boolean;
        randomReview: boolean;
        // results: boolean;
    };

    cohort: {
        week: number;
        dueDates: {
            reading: string;
            writing: string;
            drawing: string;
            submission: string;
            // teamReview: string;
            // randomReview: string;
            // results: string;
        };
    };
}
