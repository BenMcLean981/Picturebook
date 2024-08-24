import { useCallback, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { IdentifiedEntry, IdentifiedEntryGroup } from "../../lib";
import { TreeButton } from "./treeButton";
import { TreeEntryView } from "./treeEntryView";

export type EntryGroupViewProps = {
  entryGroup: IdentifiedEntryGroup;
  setEntry: (e: IdentifiedEntry) => void;
  selectedEntry?: IdentifiedEntry;
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
          {open ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </TreeButton>
      {open && (
        <div className="flex flex-col ml-8 gap-2 mt-2 mx-2">
          {entryGroup.children.map((e) => (
            <TreeEntryView
              key={e.id}
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
