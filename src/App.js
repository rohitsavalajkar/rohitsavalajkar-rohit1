import Rewards from "./Rewards";

import { useState } from "react";

function App() {

  const [comments,setComments] = useState([])

  return (

    <div>
      <Rewards/>
    </div>

  );

}

 

export default App;