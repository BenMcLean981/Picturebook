import { PropsWithChildren } from "react";

export function Content(props: PropsWithChildren) {
  return (
    <div className="flex w-full h-full justify-center items-center bg-neutral-800 rounded-2xl">
      {props.children}
    </div>
  );
}
