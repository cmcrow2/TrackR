import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState('Hello World');

  return (
    <div>
      <h1>Base Conversion Rates:</h1>
      <p>100 Applications Sent | 20 Phone Screens Received | 10 In-Person Interviews Received | 2 Offers Received</p>
    </div>
  );
};

export default App;