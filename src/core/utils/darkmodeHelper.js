const darkIt=(val)=>{
    if(val){
        document.documentElement.classList.add("dark");
    }
    else if(!val){
        document.documentElement.classList.remove("dark");
    }
}
export default darkIt;