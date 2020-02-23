export class Room {
    location: string;
    equipment: {label: string, qty: string}[];
    places: number;
    placesbusy: number;
    lecture: string | null;
    contact: string;
    status?: string;
    type: string;
}

export class Professor {
    name: string;
    lectures: string[];
    position: string;
    room: string;
    available: boolean;
    location: string;
}

export class Project {
    name: string;
    description: string;
    semester: string;
    lecture: string;
    course: string;
    authors: string[];
    professor: string;
}

export class Learning {
    room: string;
    busy: number;
    people: number;
}
