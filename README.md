# rc-textfield

A simple, flexible, and elegant text field component library for React applications. The primary component of this library is `TextField`, designed to get your form input up and running with minimal effort and a clean, consistent look.

## Installation

```bash
npm install rc-textfield
# or
yarn add rc-textfield
```

## Usage

Below is a basic example demonstrating how to use the `TextField` component.

```jsx
import React, { useState } from 'react';
import TextField from 'rc-textfield';
import 'rc-textfield/styles';

function App() {
  const [value, setValue] = useState('');

  return (
    <TextField
      value={value}
      onChange={setValue}
      prefix="$"
      validations={[
        {
          check: () => value.length > 0,
          message: 'This field is required.'
        }
      ]}
    />
  );
}

export default App;
```

## API

### `TextField`

A text field component that handles common input scenarios with ease.

#### Props

- `value` (string): The current value of the text field.
- `onChange` (function): A callback that fires whenever the text field value changes.
- `className` (string, optional): Additional CSS classes to apply to the text field.
- `validations` (array, optional): An array of validation objects to apply to the text field.
- `prefix` (string, optional): A string to display before the input field.
- `styles` (object, optional): An object to override default styles for different parts of the component.


## Styling

The `rc-textfield` components are styled using Tailwind CSS, providing a clean and modern look that's fully customizable. You can override the default styles by applying your own CSS classes through the `className` prop on both `TextField` and `ErrorText` components.

To apply the default styles, import the stylesheet from the library by adding the following line to your project:

You can also customize the appearance of the TextField component by passing a styles prop. The styles prop should be an object with keys label, input, container, and error, and values as CSS class strings.



```javascript
import 'rc-textfield/styles';
```

## Validation

The `TextField` component supports validation through the `validations` prop. This prop accepts an array of validation objects, each containing a `check` function and a `message` string. The `check` function should return a boolean indicating whether the validation passed (true) or failed (false). The `message` string is the error message that will be displayed when the validation fails.

Here's an example of how to use the `validations` prop to add required field validation to a `TextField` component:

```jsx
<TextField
  value={value}
  onChange={setValue}
  validations={[
    {
      check: () => value.length > 0,
      message: 'This field is required.'
    }
  ]}
/>
```

In this example, the check function checks whether the text field value is non-empty, and the message 'This field is required.' is displayed below the text field whenever it's empty.


## Contributing

If you have suggestions for how `rc-textfield` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [docs](#).

## License

MIT © [Farid Matovu]


