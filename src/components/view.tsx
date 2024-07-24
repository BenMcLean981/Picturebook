import { PropsWithChildren, useState } from "react";
import { Entry, TreeEntry } from "../lib";
import { Content } from "./content";
import { Sidebar } from "./sidebar";

export type ViewProps = {
  entries: ReadonlyArray<TreeEntry>;
  Decorator?: (props: PropsWithChildren) => JSX.Element;
};

export function View(props: ViewProps) {
  const { entries, Decorator } = props;

  const [entry, setEntry] = useState<Entry | undefined>(undefined);

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
        <Sidebar entries={entries} selectedEntry={entry} setEntry={setEntry} />
      </div>
      <div className="flex-grow h-full p-10">{getContent()}</div>
    </div>
  );
}
