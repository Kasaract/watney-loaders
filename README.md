## Installation

#### Using NPM:

```bash
$ npm install --save-dev watney-loaders
```

#### Using yarn:

```bash
$ yarn add watney-loaders
```

## Usage

#### Example

```js
import { Loader, Ring } from 'watney-loaders';

export default function App = () => {
  return (
    <Loader>
      <Ring
        radius={50}
        color={"#EEEEEE"}
        strokeWidth={10}
        strokeLinecap={'round'}
      >
    </Loader>
  );
}
```

## License

MIT License © 2021-present Kasaract ([@Kasaract](https://github.com/kasaract)). All rights reserved.
