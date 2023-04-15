// var initialData={
//     count:0
// }
const basicReducer=(storedata=0,action)=>{
    switch (action.type) {
        case "INCREMENT":
          return storedata + 1;
        case "DECREMENT":
          return storedata - 1;
        case "RESET":
          return (storedata = 0);
        default:
          return storedata;
      }

    
}
export default basicReducer