import type { PageServerLoad } from './$types';
import data from '$lib/data/projects.json';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = (async ({ params }) => {
  const project = data.find((project) => project.id === params.slug);

  if (!project) {
    error(404, {
      message: `${params.slug} not found!`
    });
  }

  return {
    project
  };
}) satisfies PageServerLoad;
