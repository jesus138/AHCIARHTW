export class BlackboardEntry {
    label: string;
    date: string;
}

export class Blackboard {
    entries: BlackboardEntry[];
    count: number;
}

export class BlackboardDetail {
    label: string;
    date: string;
    author: string;
    module: string;
}

export class BlackboardLarge {
    count: number;
    all: BlackboardDetail[];
    pinned: BlackboardDetail[];
}