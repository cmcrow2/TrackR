import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState('Hello World');

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default App;