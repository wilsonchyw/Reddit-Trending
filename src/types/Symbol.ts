export interface Symbol {
    daily: {
        threads: number[];
        vote: number[];
        comment: number[];
    };
    symbol: string;
    name: string;
    change: Change;
    quantity: Change;
    threads: string[];
    verb: string[];
    chart: string;
    type:string
}

export interface Change {
    vote: Comment;
    comment: Comment;
}

export interface Comment {
    day: number;
    week: number;
    month: number;
}

export interface SymbolRaw {
    created: Date;
    symbol: string;
    threads: string;
    counter: number;
    verb: string;
    type: string;
    vote: number;
    comment: number;
}
