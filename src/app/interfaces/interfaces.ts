export interface User {
    id: number;
    token: string;
    address: any;
    company: any;
    email: string;
    password: string;
    name: string;
    phone: string;
    username: string;
    website: string;
}
export interface Catalog {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}
