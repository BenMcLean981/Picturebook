import { View } from "./components";
import { TreeEntry } from "./lib";

const entries: TreeEntry[] = [
  {
    label: "h1",
    render: () => <h1 className="tw-text-black dark:tw-text-white">Hello!</h1>,
  },
  {
    label: "headers",
    children: [
      {
        label: "h1",
        render: () => <h1 className="tw-text-black dark:tw-text-white">h1</h1>,
      },
      {
        label: "h2",
        render: () => <h2 className="tw-text-black dark:tw-text-white">h2</h2>,
      },

      {
        label: "h3",
        render: () => <h3 className="tw-text-black dark:tw-text-white">h3</h3>,
      },

      {
        label: "h4",
        render: () => <h4 className="tw-text-black dark:tw-text-white">h4</h4>,
      },

      {
        label: "h5",
        render: () => <h5 className="tw-text-black dark:tw-text-white">h5</h5>,
      },

      {
        label: "h6",
        render: () => <h6 className="tw-text-black dark:tw-text-white">h6</h6>,
      },
    ],
  },
  {
    label: "button",
    render: () => (
      <button className="tw-text-black dark:tw-text-white">Button</button>
    ),
  },
];

export function App() {
  return <View entries={entries} />;
}
