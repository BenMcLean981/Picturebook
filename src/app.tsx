import { View } from "./components";
import { TreeEntry } from "./lib";

const entries: TreeEntry[] = [
  { label: "h1", render: () => <h1 style={{ color: "white" }}>Hello!</h1> },
  {
    label: "headers",
    children: [
      {
        label: "h1",
        render: () => <h1 style={{ color: "white" }}>h1</h1>,
      },
      {
        label: "h2",
        render: () => <h2 style={{ color: "white" }}>h2</h2>,
      },

      {
        label: "h3",
        render: () => <h3 style={{ color: "white" }}>h3</h3>,
      },

      {
        label: "h4",
        render: () => <h4 style={{ color: "white" }}>h4</h4>,
      },

      {
        label: "h5",
        render: () => <h5 style={{ color: "white" }}>h5</h5>,
      },

      {
        label: "h6",
        render: () => <h6 style={{ color: "white" }}>h6</h6>,
      },
    ],
  },
  {
    label: "button",
    render: () => <button>Button</button>,
  },
];

export function App() {
  return <View entries={entries} />;
}
