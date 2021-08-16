
const counterReducer = (state = 0, action) =>{
        // if(action.type === "INC_NUMBER"){
        // console.log("PRESSED+")

        // }else if(action.type === "DEC_NUMBER"){
        // console.log("PRESSED-")

        // }
        // return state;
        switch(action.type){
            case "INC_NUMBER":
                return state + 1;
            case "DEC_NUMBER":
                return state - 1;
            default:
                return state;
        }
    } 


export default counterReducer;