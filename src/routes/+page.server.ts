import type { PageServerLoad } from './$types';
import data from '$lib/data/projects.json';

export const prerender = true;

export const load = (async () => {
  const featured = data.filter(({ featured }) => featured);

  return {
    // take only the data necessary
    projects: featured.map(({ id, name, featuredImage, uri, description }) => ({
      id,
      name,
      featuredImage,
      uri,
      description
    }))
  };
}) satisfies PageServerLoad;
