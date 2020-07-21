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

export default App
