// sanity-plugin-duplicator/sanityClient.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '83hyg5rr',
  dataset: 'production', // This is the default dataset (source dataset)
  useCdn: false, // Set to `true` for production
  apiVersion: '2024-11-07', // Use a recent date for the API version
  token:'sk2uDjKVhg1gtXDtSyNuGGo64s6g1hev0qfd1xoZJtZGRqAz8n6y14zNk4YAEax4wtTFMVa2VFrJLDyvyyP1leugB5qsAuLMiHmiQyVegPTOoxXexsRRs12z9WfA7QuirMBk3YlWQbFooWZwbIf3XHtIkVbSNjAYPKn8K7FTjYTcsZ35Js5U',
   // Set up a token if needed
});

export default client;
