import { PropsWithChildren } from "react";

export type TreeButtonProps = {
  onClick: () => void;
  isSelected?: boolean;
};

export function TreeButton(props: PropsWithChildren<TreeButtonProps>) {
  const { onClick, isSelected } = props;

  const baseClass = "w-full rounded-lg border border-white text-lg text-white";
  const backgroundClass = isSelected ? "bg-neutral-500" : "";
  const className = `${baseClass} ${backgroundClass}`;

  return (
    <button className={className} onClick={onClick}>
      {props.children}
    </button>
  );
}
