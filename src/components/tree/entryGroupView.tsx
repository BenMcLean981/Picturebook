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
        <div className="tw-flex tw-justify-center tw-items-center tw-gap-2">
          {entryGroup.label}
          {open ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </TreeButton>
      {open && (
        <div className="tw-flex tw-flex-col tw-ml-8 tw-gap-2 tw-mt-2 tw-mx-2">
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
