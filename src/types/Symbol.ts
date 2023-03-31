export interface Symbol {
    symbol:  string;
    threads: string[];
    verb:    string[];
    daily:   number[];
    name:    string;
    change:  Change;
    chart:   string;
}

export interface Change {
    vote:    Comment;
    comment: Comment;
}

export interface Comment {
    min:        number;
    max:        number;
    precentage: number;
    quantity:   number;
}