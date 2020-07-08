import { Location } from 'vue-router';

interface RouterLinkProps {
  replace?: boolean;
  append?: boolean;
  exact?: boolean;
  to: Location | string;
}

export interface SidebarItemProps {
  id: number;
  label: string;
  routeAttrs: RouterLinkProps;
}
