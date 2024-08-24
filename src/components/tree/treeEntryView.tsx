import { IdentifiedEntry, IdentifiedTreeEntry, isEntry } from "../../lib";
import { EntryGroupView } from "./entryGroupView";
import { EntryView } from "./entryView";

export type TreeEntryViewProps = {
  tree: IdentifiedTreeEntry;
  setEntry: (e: IdentifiedEntry) => void;
  selectedEntry?: IdentifiedEntry;
};

export function TreeEntryView(props: TreeEntryViewProps) {
  const { tree, setEntry, selectedEntry } = props;

  if (isEntry(tree)) {
    return (
      <EntryView
        entry={tree}
        setEntry={setEntry}
        isSelected={tree.id === selectedEntry?.id}
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
