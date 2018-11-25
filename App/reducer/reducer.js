var dev=!true;
const Userdetails ={
Message:[],
url:dev?"http://10.42.0.1:3000/json":"http://13.232.19.128:3000/json",
urlplain:dev?"http://10.42.0.1:3000/":"http://13.232.19.128:3000/",
fileurl:"",
uploadfileurl:"",
}


const reducer =(state=Userdetails,action)=>{
  switch (action.type) {
    case "fileurl":
      state={
        ...state,
        fileurl:action.payload
      }
    break;
     case "uploadurl":
      state={
        ...state,
        uploadfileurl:action.payload
      }
    break;


   }
  return state;
}
export default reducer ;
