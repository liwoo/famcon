import { Identifiable } from '.';

export interface TPartialContributor extends Identifiable {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dependent: boolean;
    contributionAmount: number;
    contributiionMethod: 'monthly' | 'annual';
    dateJoined: Date;
}

export interface TContributor extends Identifiable {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dependent: boolean;
    contributionAmount: number;
    contributiionMethod: 'monthly' | 'annual';
    dateJoined: Date;
}

interface ContributorsDetailsProps {
    title: string;
    value: string;
    color: string;
}
