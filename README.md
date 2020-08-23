# danger-ui

> Danger UI React Components

[![NPM](https://img.shields.io/npm/v/danger-ui.svg)](https://www.npmjs.com/package/danger-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save danger-ui
```

## Components

- Input
- Button
- Avatar
- Spinner
- Table
- Badge
- Select
- Alert
- Modal

## Usage

```jsx
import React from 'react'

import { MyComponent } from 'danger-ui'
import 'danger-ui/dist/index.css'

const Example = () => {
  return <MyComponent />
}
```

## Button

**Props**

| Property   | Type       | Values                                           | Description                                | Default   |
| ---------- | ---------- | ------------------------------------------------ | ------------------------------------------ | --------- |
| `disabled` | `boolean`  | `true` `false`                                   | Button can be disabled when true           | `false`   |
| `design`   | `string`   | `regular` `light` `round` `transparent` `border` | Different styles for single component      | `regular` |
| `radius`   | `number`   | 0 - 50                                           | Border radius                              | `10`      |
| `loading`  | `boolean`  | `true` `false`                                   | Disables button and show loading when true | `false`   |
| `onClick`  | `function` |                                                  | Triggers function passed                   |           |
| block      | `boolean`  | `true` `false`                                   | Makes width 100%                           | `false`   |

## License

MIT © [apodacaduron](https://github.com/apodacaduron)
