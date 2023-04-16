// var initialData={
//     count:0
// }

const basicReducer=(storedata=0,action)=>{
    switch (action.type) {
        case "INCREMENT":
          console.log(storedata)
          return storedata + 1;
        case "DECREMENT":
          console.log(storedata)
          return storedata - 1;
          
        case "RESET":
          console.log(storedata=0)
          return (storedata);

        default:
          console.log(storedata)
          return storedata;
          // console.log(storedata)
      }
     

    
}

export default basicReducer