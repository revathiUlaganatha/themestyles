import React, { useEffect, useMemo, useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber=useMemo(() => {
    return slow(num);
  },[num]);

  const themeStyles =
  {
    background: dark ? 'white' : 'violet',
    color: dark ? 'white' : 'black',
    padding:'20px',
    borderRadius:'5px',

  };
    const hi= useEffect(()=>{console.log("theme Change")},[themeStyles])



return (
  <div style={themeStyles}>
        <input 
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))} 
        />
        <button 
        onClick={() => setDark(curr =>!curr)}>Toggle theme</button>
    <div>Double:{doubleNumber}</div>
    </div> 
  );
}

export default App;

function slow(num)
{ 
  for(let i=0;i<100000;i++)
  return num*2;
}