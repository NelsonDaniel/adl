import { Tag } from '../models/Tag';
export type TagList = Array<Tag> & MaximumElements<200> & MinimumElements<0>;
