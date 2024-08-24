import { PropsWithChildren, useMemo, useState } from "react";
import { IdentifiedEntry, makeIdentified, TreeEntry } from "../lib";
import { Sidebar } from "./sidebar";

export type ViewProps = {
  entries: ReadonlyArray<TreeEntry>;
  Decorator?: (props: PropsWithChildren) => JSX.Element;
};

function DefaultDecorator(props: PropsWithChildren) {
  return props.children;
}

export function View(props: ViewProps) {
  const { entries } = props;

  const Decorator = props.Decorator ?? DefaultDecorator;

  const [entry, setEntry] = useState<IdentifiedEntry | undefined>(undefined);

  const identifiedEntries = useMemo(
    () => entries.map(makeIdentified),
    [entries],
  );

  return (
    <div className="flex w-full h-dvh">
      <div className="w-[500px] dark:bg-neutral-800 bg-white h-full">
        <Sidebar
          entries={identifiedEntries}
          selectedEntry={entry}
          setEntry={setEntry}
        />
      </div>
      <div className="flex-grow h-full dark:bg-neutral-700 bg-neutral-300 p-10">
        <Decorator>
          <div className="flex w-full h-full justify-center items-center dark:bg-neutral-800 bg-white rounded-2xl">
            {entry?.render()}
          </div>
        </Decorator>
      </div>
    </div>
  );
}
