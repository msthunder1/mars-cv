export interface CMSAdapter {
    getCVContent(): Promise<CV>;
}

export interface CVLink {
    label: string;
    url: string;
}

export interface CVContact {
    email: string;
    links: CVLink[];
}

export interface CVExperience {
    id: number;
    role: string;
    company: string;
    start: string;
    end?: string;
    summary: string;
    bullets?: unknown[];
    stack?: string[];
    clients?: string[];
}

export interface CVSkillItem {
    name: string;
    level: number;
}

export interface CVSkillGroup {
    id: number;
    label: string;
    years?: number;
    items: CVSkillItem[];
}

export interface CVEducation {
    id: number;
    degree: string;
    institution: string;
    start: string;
    end?: string;
}

export interface CVLanguages {
    name: string;
    level: string;
}

export interface CV {
    name: string;
    headline: string;
    role: string;
    phone: string;
    location: string;
    languages: CVLanguages[];
    intro: string;
    photo: unknown;
    contact: CVContact;
    experience: CVExperience[];
    skills: CVSkillGroup[];
    education: CVEducation[];
    interests: string[];
}

export type SectionKey = "experience" | "skills" | "education" | "interests";
