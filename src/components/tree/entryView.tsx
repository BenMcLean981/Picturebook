import { Entry } from "../../lib";
import { TreeButton } from "./treeButton";

export type EntryViewProps = {
  setEntry: (e: Entry) => void;
  isSelected: boolean;
  entry: Entry;
};

export function EntryView(props: EntryViewProps) {
  const { entry, isSelected, setEntry } = props;

  return (
    <TreeButton isSelected={isSelected} onClick={() => setEntry(entry)}>
      {entry.label}
    </TreeButton>
  );
}
