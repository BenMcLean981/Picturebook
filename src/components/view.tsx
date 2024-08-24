import { PropsWithChildren, useMemo, useState } from "react";
import { IdentifiedEntry, makeIdentified, TreeEntry } from "../lib";
import { Content } from "./content";
import { Sidebar } from "./sidebar";

export type ViewProps = {
  entries: ReadonlyArray<TreeEntry>;
  Decorator?: (props: PropsWithChildren) => JSX.Element;
};

export function View(props: ViewProps) {
  const { entries, Decorator } = props;

  const [entry, setEntry] = useState<IdentifiedEntry | undefined>(undefined);

  const identifiedEntries = useMemo(
    () => entries.map(makeIdentified),
    [entries],
  );

  function getContent() {
    const children = <Content>{entry?.render()}</Content>;

    if (Decorator !== undefined) {
      return <Decorator>{children}</Decorator>;
    } else {
      return children;
    }
  }

  return (
    <div className="flex w-full h-dvh">
      <div className="w-[500px] bg-neutral-800 h-full">
        <Sidebar
          entries={identifiedEntries}
          selectedEntry={entry}
          setEntry={setEntry}
        />
      </div>
      <div className="flex-grow h-full bg-neutral-700 p-10">{getContent()}</div>
    </div>
  );
}
