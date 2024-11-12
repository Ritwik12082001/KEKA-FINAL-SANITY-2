// sanity-plugin-duplicator/index.js
import { definePlugin } from 'sanity';
import DuplicatorTool from './DuplicatorTool';

export default definePlugin({
  name: 'duplicator',
  title: 'Duplicator Tool',
  component: DuplicatorTool,
});
