import {ConfigContext} from 'sanity'
import {ListItemBuilder, StructureBuilder, StructureResolver} from 'sanity/desk'
import {
  IoBackspaceOutline as MissingIcon,
  IoSettings as IconSettings,
  IoConstruct as IconAppConfig,
  IoFolderOpen as ListItemIcon,
} from 'react-icons/io5'
import {GrConfigure} from 'react-icons/gr'
import Actions from '../components/actions/Actions'
export function structure(S: StructureBuilder, context: ConfigContext) {
  const pages = S.listItem()
    .title('ABC')
    .child(S.list)
    .title('Navigations')
    .items([S.listItem().title('Home').icon(ListItemIcon).child(categoryList('homepage'))])
}
