// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'; // Import builder from Sanity
//import { MdSettings } from 'react-icons/md'; // Import an icon (you can use any icon you wan    t)
import DuplicatorTool from '../../Keka/sanity-plugin-duplicator/DuplicatorTool'; // Adjust this path to where your DuplicatorTool is located

// Define the structure of your desk/sidebar
export default () =>
  S.list()
    .title('Content') // Title of the list in the sidebar
    .items([
      // You can add other items to your sidebar list here (e.g., for documents, schemas, etc.)
      S.divider(),
      // Add the Duplicator Tool here
      S.listItem()
        .title('Duplicator Tool') // Title displayed in the sidebar
        //.icon(MdSettings) // Icon for the tool (optional)
        .child(S.component(DuplicatorTool)), // Display the DuplicatorTool component when clicked
    ]);
