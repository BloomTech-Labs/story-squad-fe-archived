export interface Story {
    automated_readability_index: number;
    childId: number;
    coleman_liau_index: number;
    consolidated_score: string;
    dale_chall_readability_score: number;
    difficult_words: number;
    doc_length: number;
    flesch_kincaid_grade: number;
    flesch_reading_ease: number;
    gunning_fog: number;
    id: number;
    isFlagged: boolean;
    linsear_write_formula: number;
    points: number;
    possibleWords: string;
    quote_count: number;
    smog_index: number;
    story: {
        page1: string;
        page2: string;
        page3: string;
        page4: string;
        page5: string;
    };
    transcribed_text: {
        t_page1: string;
        t_page2: string;
        t_page3: string;
        t_page4: string;
        t_page5: string;
    };
    votes: number;
    week: number;
}
