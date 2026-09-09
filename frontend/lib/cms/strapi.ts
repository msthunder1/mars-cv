import {CMSAdapter, CV} from './types';

export const strapiAdapter: CMSAdapter = {

    async getCVContent(): Promise<CV> {
        // Implementation for fetching CV content from Strapi

        const STRAPI_URL = process.env.STRAPI_URL;
        if (!STRAPI_URL) throw new Error("STRAPI_URL environment variable is not set");
        const response = await fetch(`${STRAPI_URL}/api/cv?populate=*`);

        if (!response.ok) {
            throw new Error(`Strapi fetch failed: ${response.statusText}`);
        }

        const data = await response.json();

        return {
            ...data.data,
            meta: {
                source: "strapi",
                fetchedAt: new Date().toISOString()
            }
        };
    }
}