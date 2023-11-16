const birthDate="4 May 2024 12:00:00 AM"
document.getElementById("bDate").innerText=birthDate;
const inputs=document.querySelectorAll("input");
function done(){
    const last=new Date(birthDate)
    const present=new Date();
    const d=(last-present)/1000;
    if(d<0){
        return;
    }
    inputs[0].value=Math.floor(d/3600/24);
    inputs[1].value=Math.floor(d/3600)%24;
    inputs[2].value=Math.floor(d/60)%60;
    inputs[3].value=Math.floor(d)%60;
}
done();
setInterval(
    ()=>{
        done()
    },1000);