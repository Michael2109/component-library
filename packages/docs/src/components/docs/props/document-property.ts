interface DocumentProperty {
  name: string;
  optional: boolean;
  readonly: boolean;
  type: string;
  default?: string;
  description: string;
}

export type { DocumentProperty };
