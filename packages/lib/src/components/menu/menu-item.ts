interface MenuItem {
  key: string;
  label: string;
  icon?: string;
  command?: () => void;
  items?: Array<MenuItem>;
}

export type { MenuItem };
