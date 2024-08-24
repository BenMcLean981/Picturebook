import { v4 } from "uuid";

export type Entry = {
  label: string;
  render: () => JSX.Element;
};

export type EntryGroup = {
  label: string;
  children: ReadonlyArray<TreeEntry>;
};

export type TreeEntry = Entry | EntryGroup;

export type Identified = { id: string };

export type IdentifiedEntry = {
  label: string;
  render: () => JSX.Element;
} & Identified;

export type IdentifiedEntryGroup = {
  label: string;
  children: ReadonlyArray<IdentifiedTreeEntry>;
} & Identified;

export type IdentifiedTreeEntry = IdentifiedEntry | IdentifiedEntryGroup;

export function isGroup(entry: TreeEntry): entry is EntryGroup {
  return "children" in entry;
}

export function isEntry(entry: TreeEntry): entry is Entry {
  return "render" in entry;
}

export function makeIdentified(entry: TreeEntry): IdentifiedTreeEntry {
  if (isEntry(entry)) {
    return {
      ...entry,
      id: v4(),
    };
  } else {
    return {
      ...entry,
      id: v4(),
      children: entry.children.map(makeIdentified),
    };
  }
}
