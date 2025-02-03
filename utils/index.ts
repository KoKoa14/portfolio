export interface IJob {
    title: string;
    titleIcon: string;
    image: string|undefined;
    company: string;
    location: string;
    start: string;
    end: string;
    descriptions: {
        head: string;
        details: string[]|undefined;
    }[];
}

export interface IEducation {
    title: string;
    titleIcon: string;
    company: string;
    location: string;
    start: string;
    end: string;
    cert: string;
    result: string;
}
