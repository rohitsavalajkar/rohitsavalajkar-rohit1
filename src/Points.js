export const fetchTransactionData =() =>{
  //MonthlyWise calculation
    return Promise.resolve({
        january:[120,80,150],
        february:[60,200,90],
        March:[50,110,130],
    });
};
// Business Logic
 export const calculatePoints =(amount) => {
    let points = 0;
    if(amount > 100){
      points += 2*(amount-100);
    }
    if(amount > 50){
      points +=(amount -50);
    }
    return points;
  };

  export const getPointsData = async()=>{
    const data = await fetchTransactionData();
    const points ={};
    for(const month in data){
      points[month] = data[month].reduce((total,amount)=>total+calculatePoints(amount),0);
    }
    return points;
  };