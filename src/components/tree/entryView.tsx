import { IdentifiedEntry } from "../../lib";
import { TreeButton } from "./treeButton";

export type EntryViewProps = {
  setEntry: (e: IdentifiedEntry) => void;
  isSelected: boolean;
  entry: IdentifiedEntry;
};

export function EntryView(props: EntryViewProps) {
  const { entry, isSelected, setEntry } = props;

  return (
    <TreeButton isSelected={isSelected} onClick={() => setEntry(entry)}>
      {entry.label}
    </TreeButton>
  );
}
