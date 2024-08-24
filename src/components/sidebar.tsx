import { IdentifiedEntry, IdentifiedTreeEntry } from "../lib";
import { TreeEntryView } from "./tree";

export type SidebarProps = {
  entries: ReadonlyArray<IdentifiedTreeEntry>;
  selectedEntry?: IdentifiedEntry;
  setEntry: (e: IdentifiedEntry) => void;
};

export function Sidebar(props: SidebarProps) {
  const { entries, selectedEntry, setEntry } = props;

  return (
    <div className="flex flex-col gap-2 m-2">
      {entries.map((e) => (
        <TreeEntryView
          key={e.id}
          tree={e}
          selectedEntry={selectedEntry}
          setEntry={setEntry}
        />
      ))}
    </div>
  );
}
