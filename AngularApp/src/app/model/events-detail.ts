export class EventsDetail {
    mailtotal: number;
    mailnew: number;
    annountotal: number;
    announnew: number;
}

export class Mail {
    email: string;
    sent: MailEntry[];
    received: MailEntry[];
}

export class MailEntry {
    entity: string;
    regard: string;
    date: string;
    new?: boolean;
}
