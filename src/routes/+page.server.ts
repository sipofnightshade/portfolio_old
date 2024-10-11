import type { PageServerLoad } from './$types';
import data from '$lib/data/projects.json';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = (async () => {
  const featured = data.filter(({ featured }) => featured);

  if (!featured) {
    error(404, {
      message: `Featured projects not found!`
    });
  }

  return {
    projects: featured.map(({ id, name, featuredImage, uri, description }) => ({
      id,
      name,
      featuredImage,
      uri,
      description
    }))
  };
}) satisfies PageServerLoad;
