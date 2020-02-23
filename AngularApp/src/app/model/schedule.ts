export class ScheduleEntry {
    label: string;
    isnow?: boolean;
    isirregular?: boolean;
}

export class Schedule {
    columns: {
        label: string,
        entries: ScheduleEntry[],
        isnow?: boolean
    }[];
}

export function scheduleTable(schedule: Schedule): ScheduleEntry[][] {
    if (schedule.columns === undefined || schedule.columns.length === 0) {
        return null;
    }
    const len = schedule.columns[0].entries.length;
    for (const col of schedule.columns) {
        if (col.entries.length != len) {
            return null;
        }
    }
    const entries: ScheduleEntry[][] = [];
    // head row
    entries.push([]);
    for (let i = 0; i < schedule.columns.length; i++) {
        entries[0].push({
            label: schedule.columns[i].label,
            isnow: schedule.columns[i].isnow
        });
    }
    // table body / rows
    for (let i = 0; i < len; i++) {
        entries.push([]);
        for (const col of schedule.columns) {
            const entry: ScheduleEntry = {
                label: col.entries[i].label,
                isnow: col.entries[i].isnow,
                isirregular: col.entries[i].isirregular
            };
            entries[i+1].push(entry);
        }
    }
    return entries;
}
