# Picturebook

**Simply demo your React components.**

Picturebook is a React UI library to demo components. It renders a tree of elements that you have given it.

Currently picturebook is not a standalone application and needs a dev server (like [vite](https://vitejs.dev/guide/)) to run.

## Quickstart

Install picturebook with `yarn add @picturebook/core`.

**Be sure to add the css styles in main.tsx**

**Main.tsx**

```
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import '@picturebook/core/style.css';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

**App.tsx**

```
import { TreeEntry, View } from '@picturebook/core';

const entries: TreeEntry[] = [{ label: 'h1', render: () => <h1 style={{color: "white"}}>Hello!</h1> }];

export function App() {
  return <View entries={entries} />;
}
```

You can now run the app with `yarn dev`, you will see your header component available to view. The beauty of this system is that you can compose entries however you want. You can write functions to generate different cases, or you can create them manually (for example, several different colors of the same Button component).

## Decorators

Picturebook allows you to wrap the component view area with a Decorator as follows:

```
import { TreeEntry, View } from '@picturebook/core';
import {PropsWithChildren} from "React";

const entries: TreeEntry[] = [{ label: 'h1', render: () => <h1 style={{color: "white"}}>Hello!</h1> }];

export function App() {
  return <View entries={entries} Decorator={Decorator} />;
}

function Decorator(props: PropsWithCildren) {
  return <SomeContext>{props.children}</SomeContext>
}
```

## Entry Trees

You can create complex tree structures in Picturebook as shown below. You can put whatever you like into this React components, you can make them interactive and they will be rendered on the client.

```
const entries: TreeEntry[] = [
  {
    label: 'headers',
    children: [
      {
        label: 'h1',
        render: () => <h1 style={{ color: 'white' }}>h1</h1>,
      },
      {
        label: 'h2',
        render: () => <h2 style={{ color: 'white' }}>h2</h2>,
      },

      {
        label: 'h3',
        render: () => <h3 style={{ color: 'white' }}>h3</h3>,
      },

      {
        label: 'h4',
        render: () => <h4 style={{ color: 'white' }}>h4</h4>,
      },

      {
        label: 'h5',
        render: () => <h5 style={{ color: 'white' }}>h5</h5>,
      },

      {
        label: 'h6',
        render: () => <h6 style={{ color: 'white' }}>h6</h6>,
      },
    ],
  },
  {
    label: 'button',
    render: () => <button>Button</button>,
  },
];
```

## Issues

If you have any suggestions, please open an Issue!
