# backdrop-easy

## Install

```bash
npm install --save backdrop-easy
```

## Usage

```jsx
import { BackdropProvider } from 'backdrop-easy';

<BackdropProvider progress={<CircularProgress/>}>
        <App />
</BackdropProvider>
```

```jsx
import React from 'react'

import { useBackdrop } from 'backdrop-easy'

const App = () => {
  const [open]=useBackdrop();
  return (
  <div >
    <button onClick={open}>
      Pop
    </button>
  </div>
  );
}
```


