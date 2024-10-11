import type { PageServerLoad } from './$types';
import data from '$lib/data/projects.json';

export const prerender = true;

export const load = (async () => {
  return {
    projects: data.map(({ id, name, featuredImage, uri, description }) => ({
      id,
      name,
      featuredImage,
      uri,
      description
    }))
  };
}) satisfies PageServerLoad;
