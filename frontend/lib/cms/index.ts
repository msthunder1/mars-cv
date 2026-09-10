import { CMSAdapter } from "./types";
import { strapiAdapter } from "./strapi";

export function getCVSource(): CMSAdapter {
  const source = process.env.CMS_SOURCE;

  switch (source) {
    case "strapi":
      return strapiAdapter;
    default:
      throw new Error(`Unknown CMS_SOURCE: ${source}`);
  }
}

export * from "./types";
