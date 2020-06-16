import { Dictionary } from '@azure-tools/linq';
import { VersionedElement } from './versioned-element';

export interface SchemaInitializer extends VersionedElement {
  description?: string;
  summary?: string;
  clientName?: string;
  nullable?: boolean;
  readOnly?: boolean;
  tags?: Dictionary<string | undefined>;
}
