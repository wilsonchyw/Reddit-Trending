export interface Symbol {
    symbol:   string;
    name:     string;
    change:   Change;
    quantity: Change;
    threads:  string[];
    verb:     string[];
    chart:    string;
}

export interface Change {
    vote:    Comment;
    comment: Comment;
}

export interface Comment {
    day:   number;
    week:  number;
    month: number;
}
