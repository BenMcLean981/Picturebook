import { Entry, isEntry, TreeEntry } from "../../lib";
import { EntryGroupView } from "./entryGroupView";
import { EntryView } from "./entryView";

export type TreeEntryViewProps = {
  tree: TreeEntry;
  setEntry: (e: Entry) => void;
  selectedEntry?: Entry;
};

export function TreeEntryView(props: TreeEntryViewProps) {
  const { tree, setEntry, selectedEntry } = props;

  if (isEntry(tree)) {
    return (
      <EntryView
        entry={tree}
        setEntry={setEntry}
        isSelected={tree.label === selectedEntry?.label}
      />
    );
  } else {
    return (
      <EntryGroupView
        entryGroup={tree}
        setEntry={setEntry}
        selectedEntry={selectedEntry}
      />
    );
  }
}
