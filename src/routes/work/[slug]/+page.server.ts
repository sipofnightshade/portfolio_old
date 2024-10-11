import type { PageServerLoad } from './$types';
import data from '$lib/data/projects.json';

export const prerender = true;

export const load = (async ({ params }) => {
  return {
    project: data.find((project) => project.id === params.slug)
  };
}) satisfies PageServerLoad;
