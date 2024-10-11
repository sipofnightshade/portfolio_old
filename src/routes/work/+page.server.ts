import type { PageServerLoad } from './$types';
import data from '$lib/data/projects.json';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = (async () => {
  const projects = data.map(({ id, name, featuredImage, uri, description }) => ({
    id,
    name,
    featuredImage,
    uri,
    description
  }));

  if (!projects) {
    error(404, {
      message: `Projects not found!`
    });
  }

  return {
    projects
  };
}) satisfies PageServerLoad;
