import { PropsWithChildren } from "react";

export type TreeButtonProps = {
  onClick: () => void;
  isSelected?: boolean;
};

export function TreeButton(props: PropsWithChildren<TreeButtonProps>) {
  const { onClick, isSelected } = props;

  const baseClass =
    "w-full rounded-lg border text-lg dark:border-white dark:text-white border-black text-black";
  const backgroundClass = isSelected ? "dark:bg-blue-500 bg-blue-400" : "";
  const className = `${baseClass} ${backgroundClass}`;

  return (
    <button className={className} onClick={onClick}>
      {props.children}
    </button>
  );
}
