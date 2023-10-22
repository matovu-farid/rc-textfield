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

## Styling

The `rc-textfield` components are styled using Tailwind CSS, providing a clean and modern look that's fully customizable. You can override the default styles by applying your own CSS classes through the `className` prop on both `TextField` and `ErrorText` components.

## Contributing

If you have suggestions for how `rc-textfield` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [docs](#).

## License

MIT © [Farid Matovu]


