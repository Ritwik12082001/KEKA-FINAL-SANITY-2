import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'; // Should be correct for Sanity v3+
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import duplicator from './sanity-plugin-duplicator/DuplicatorTool';

export default defineConfig({
  name: 'default',
  title: 'keka',

  projectId: '83hyg5rr',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Customize your structure here
            S.documentTypeListItem('emp').title('Emp').id('emp-list'),
            S.divider(),
            ...S.documentTypeListItems(), // Includes all schema types
          ]),
    }),
    visionTool(),
    duplicator,
  ],

  schema: {
    types: schemaTypes,
  },
});
