import { PropsWithChildren } from "react";

export type TreeButtonProps = {
  onClick: () => void;
  isSelected?: boolean;
};

export function TreeButton(props: PropsWithChildren<TreeButtonProps>) {
  const { onClick, isSelected } = props;

  const baseClass =
    "tw-w-full tw-rounded-lg tw-border tw-text-lg dark:tw-border-white dark:tw-text-white tw-border-black tw-text-black";
  const backgroundClass = isSelected
    ? "dark:tw-bg-blue-500 tw-bg-blue-400"
    : "";
  const className = `${baseClass} ${backgroundClass}`;

  return (
    <button className={className} onClick={onClick}>
      {props.children}
    </button>
  );
}
