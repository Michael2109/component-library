interface MenuItem {
  key: string;
  label: string;
  command?: () => void;
  items?: Array<MenuItem>;
}

export type { MenuItem };
