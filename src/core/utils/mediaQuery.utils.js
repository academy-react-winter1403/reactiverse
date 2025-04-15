const mediaQuery=(query,whatToDo,whatToDoIfFalse)=>{
    let x=window.matchMedia(query);
    if(x.matches){
        whatToDo();
        console.log(true)
    }
    else{
        whatToDoIfFalse();
    }
}
export default mediaQuery;