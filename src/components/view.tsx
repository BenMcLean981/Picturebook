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
    <div className="tw-flex tw-w-full tw-h-dvh">
      <div className="tw-w-[500px] dark:tw-bg-neutral-800 tw-bg-white tw-h-full">
        <Sidebar
          entries={identifiedEntries}
          selectedEntry={entry}
          setEntry={setEntry}
        />
      </div>
      <div className="tw-flex-grow tw-h-full dark:tw-bg-neutral-700 tw-bg-neutral-300 tw-p-10">
        <Decorator>
          <div className="tw-flex tw-w-full tw-h-full tw-justify-center tw-items-center dark:tw-bg-neutral-800 tw-bg-white tw-rounded-2xl">
            {entry?.render()}
          </div>
        </Decorator>
      </div>
    </div>
  );
}
