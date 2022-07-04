/* eslint-disable no-unused-vars */
export interface Isource {
    sources: [
        {
            id: string;
            name: string;
        }
    ];
}

export interface Inews {
    articles: [
        {
            source: {
                id: string | null;
                name: string;
            };
            author: string;
            title: string;
            description: string;
            publishedAt: string;
            url: string;
            urlToImage: string;
        }
    ];
}

export interface Iloader {
    baseLink: string;
    options: { apiKey: string };
}

export type Callback<T> = (data: T) => void;
