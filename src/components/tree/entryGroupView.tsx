import { useCallback, useState } from "react";
import { Entry, EntryGroup } from "../../lib";
import { TreeEntryView } from "./treeEntryView";
import { TreeButton } from "./treeButton";

export type EntryGroupViewProps = {
  entryGroup: EntryGroup;
  setEntry: (e: Entry) => void;
  selectedEntry?: Entry;
};

export function EntryGroupView(props: EntryGroupViewProps) {
  const { entryGroup, setEntry, selectedEntry } = props;

  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <div>
      <TreeButton isSelected={open} onClick={toggleOpen}>
        <div className="flex justify-center items-center gap-2">
          {entryGroup.label}
        </div>
      </TreeButton>
      {open && (
        <div className="flex flex-col ml-8 gap-2 m-2">
          {entryGroup.children.map((e) => (
            <TreeEntryView
              key={e.label}
              tree={e}
              setEntry={setEntry}
              selectedEntry={selectedEntry}
            />
          ))}
        </div>
      )}
    </div>
  );
}
