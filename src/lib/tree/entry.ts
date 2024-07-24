export type Entry = {
  label: string;
  render: () => JSX.Element;
};

export type EntryGroup = {
  label: string;
  children: ReadonlyArray<TreeEntry>;
};

export type TreeEntry = Entry | EntryGroup;

export function isGroup(entry: TreeEntry): entry is EntryGroup {
  return 'children' in entry;
}

export function isEntry(entry: TreeEntry): entry is Entry {
  return 'render' in entry;
}
