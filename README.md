# danger-ui

> Danger UI React Components

[![NPM](https://img.shields.io/npm/v/danger-ui.svg)](https://www.npmjs.com/package/danger-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

https://apodacaduron.github.io/danger-ui/

## Install

```bash
npm install --save danger-ui
```

## Components

- [Button](#button)
- [Input](#input)
- [Avatar](#avatar)
- [Spinner](#spinner)
- [Table](#table)
- [Badge](#badge)
- [Select](#select)
- [Alert](#alert)
- [Modal](#modal)
- [FormGroup](#form-group)

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
| `block`    | `boolean`  | `true` `false`                                   | Makes width 100%                           | `false`   |

## Input

**Props**

| Property      | Type                        | Values                  | Description                                          | Default |
| ------------- | --------------------------- | ----------------------- | ---------------------------------------------------- | ------- |
| `disabled`    | `boolean`                   | `true` `false`          | Button can be disabled when true                     | `false` |
| `design`      | `string`                    | `line` `solid` `border` | Different styles for single component                | `solid` |
| `radius`      | `number`                    | 0 - 50                  | Border radius                                        | `10`    |
| `animated`    | `boolean`                   | `true` `false`          | Animates label on focus if true                      | `false` |
| `placeholder` | `string`                    |                         | Sets a placeholder text, if animated becomes a label |         |
| `value`       | ` string``boolean``number ` |                         | Sets input value                                     |         |
| `onChange`    | `function`                  |                         |                                                      |         |
| `onFocus`     | `function`                  |                         |                                                      |         |
| `onBlur`      | `function`                  |                         |                                                      |         |
| `danger`      | `boolean`                   | ` true``false `         | Turns de input red                                   | `false` |
| `dangerText`  | `string`                    |                         | Adds text under input                                |         |
| `block`       | `boolean`                   | ` true``false `         | Sets the input to full width                         | `false` |

## Avatar

**Props**

| Property        | Type          | Values         | Description                                                    | Default      |
| --------------- | ------------- | -------------- | -------------------------------------------------------------- | ------------ |
| `size`          | `number`      |                | Changes dimensions of element                                  | `40`         |
| `radius`        | `number`      | 0 - 50         | Border radius                                                  | `10`         |
| `src`           | `string`      | `true` `false` | URL to show avatar                                             | `false`      |
| `defaultAvatar` | `string`      |                | URL from a default image                                       | Gravatar url |
| `alt`           | `string`      |                | Adds alt to img element                                        |              |
| `color`         | `string`      |                | Can take a color code, or use primary color from css variables | `primary`    |
| `~~border~~`    | `~~boolean~~` |                | ~~Not implemented yet~~                                        |              |
| `text`          | `string`      |                | If theres no src added it will show 2 characters               |              |

## Spinner

**Props**

| Property | Type     | Values | Description                   | Default |
| -------- | -------- | ------ | ----------------------------- | ------- |
| `size`   | `number` |        | Changes dimensions of element | `20`    |
| `width`  | `number` |        | Changes dimensions of element | `1`     |

## Table

**Props**

| Property  | Type    | Values | Description                              | Default |
| --------- | ------- | ------ | ---------------------------------------- | ------- |
| `columns` | `array` | []     | Maps array and prints it on table header |         |
| `body`    |         | jsx    | Pass rows for table                      |         |

## Badge

**Props**

| Property | Type | Values | Description      | Default |
| -------- | ---- | ------ | ---------------- | ------- |
| `text`   |      |        | Pass jsx or text |         |

## Select

**Props**

| Property      | Type                        | Values                       | Description                                                    | Default |
| ------------- | --------------------------- | ---------------------------- | -------------------------------------------------------------- | ------- |
| `disabled`    | `boolean`                   | `true` `false`               | Button can be disabled when true                               | `false` |
| `design`      | `string`                    | `line` `solid` `border`      | Different styles for single component                          | `solid` |
| `radius`      | `number`                    | 0 - 50                       | Border radius                                                  | `10`    |
| `animated`    | `boolean`                   | `true` `false`               | Animates label on focus if true                                | `false` |
| `placeholder` | `string`                    |                              | Sets a placeholder text, if animated becomes a label           |         |
| `value`       | ` string``boolean``number ` |                              | Sets select value                                              |         |
| `data`        | `array`                     | [{ option: 'Foo', value: 1}] | Takes an array of objects with properties `option` and `value` |         |
| `onChange`    | `function`                  |                              |                                                                |         |
| `onFocus`     | `function`                  |                              |                                                                |         |
| `onBlur`      | `function`                  |                              |                                                                |         |
| `danger`      | `boolean`                   | ` true``false `              | Turns de input red                                             | `false` |
| `dangerText`  | `string`                    |                              | Adds text under input                                          |         |
| `block`       | `boolean`                   | ` true``false `              | Sets the input to full width                                   | `false` |

## Alert

**Props**

| Property   | Type       | Values                                                                        | Description                                                | Default      |
| ---------- | ---------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------ |
| `children` | `jsx`      |                                                                               | Takes in any jsx element                                   |              |
| `color`    | `string`   |                                                                               | If not set will use primary color, or use any color format | `primary`    |
| `position` | `string`   | ` top-left``top-center``top-right``bottom-left``bottom-center``bottom-right ` | Changes position of alert on the screen                    | `top-center` |
| `visible`  | `boolean`  | ` true``false `                                                               | Displays the alert                                         | `false`      |
| `onClick`  | `function` |                                                                               | Execute passed function                                    |              |

## Modal

**Props**

| Property     | Type       | Values          | Description                                                | Default |
| ------------ | ---------- | --------------- | ---------------------------------------------------------- | ------- |
| `visible`    | `boolean`  | ` true``false ` | Displays the modal component                               | `false` |
| `header`     | `jsx`      |                 | Displays on top of modal component                         |         |
| `footer`     | `jsx`      |                 | Displays in bottom of modal component                      |         |
| `children`   | `jsx`      |                 | Display on the center of modal component                   |         |
| `onClickOut` | `function` |                 | Executes function when click background of modal component |         |

## FormGroup

**Props**

| Property   | Type  | Values | Description              | Default |
| ---------- | ----- | ------ | ------------------------ | ------- |
| `children` | `jsx` |        | Takes in any jsx element |         |

## License

MIT © [apodacaduron](https://github.com/apodacaduron)
