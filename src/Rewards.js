import React,{useState,useEffect} from 'react';

const Rewards =() => {
  const [trans,setTrans] = useState([]);

useEffect(()=>{
  const fetchData =async () => {
    const data = [50,120,80,150];
    setTrans(data);
  };
  fetchData();
},[]);

// Business Logic
const calculatePoints =(amount) => {
  let points = 0;
  if(amount > 100){
    points += 2*(amount-100);
  }
  if(amount > 50){
    points +=(amount -50);
  }
  return points;
};

return(
  <div>
    <h2> Transction Data:</h2>
    <ul>
      {trans.map((amount,index)=>(
        <li key={index}>
          Transcation Amount: ${amount} | Points Earned:{calculatePoints(amount)}
        </li>
      ))}
    </ul>
    </div>
)

};
export default Rewards;

  