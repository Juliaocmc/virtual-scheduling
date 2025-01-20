export interface NewContact {
    name: string;
    phone: string;
    document: string;
    email: string;
}

export interface Contact {
    id: string;
    name: string;
    phone: string;
    document: string;
    email: string;
}

export interface PaginatedResponse {
    contacts: Contact[];
    currentPage: number;
    currentSize: number;
    totalElements: number;
    totalPages: number;
}

export interface CreateSchedulerForm {
    contactId: string;
    date: string;
    startHour: string;
    endHour: string;
    local: string;
}

export interface SchedulerData {
    schedulId: string;
    hour: string;
    contact: string;
    local: string;
}

export interface SchedulerDataResponse {
    schedulers: SchedulerData[]
}