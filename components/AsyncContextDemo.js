import React from "react";


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  
  let data = {username:"username",
              position:"position",
             }

  return (
    <ValueProvider value={data} tag="exam6a">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;