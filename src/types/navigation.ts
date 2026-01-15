export interface NavItem {
  title: string;
  slug: string;
}

export interface NavSection {
  title: string;
  slug: string;
  items: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SidebarProps {
  currentPath: string;
  navigation?: NavSection[];
  projectTitle?: string;
  baseUrl?: string;
}

export interface DocsLayoutProps {
  title: string;
  description: string;
  headings: any[];
  navigation?: NavSection[];
  currentPath?: string;
  projectTitle?: string;
  baseUrl?: string;
  breadcrumb?: BreadcrumbItem[];
}
