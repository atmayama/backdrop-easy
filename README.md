# backdrop-easy

## Install

```bash
npm i @sushanthkille/backdrop-easy
```

## Usage

```jsx
import { BackdropProvider } from '@sushanthkille/backdrop-easy';

<BackdropProvider progress={<CircularProgress/>}>
        <App />
</BackdropProvider>
```

```jsx
import React from 'react'

import { useBackdrop } from '@sushanthkille/backdrop-easy'

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


