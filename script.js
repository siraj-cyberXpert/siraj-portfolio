const texts=["Web Developer","Cyber Security Learner","Fiverr Freelancer"];
let i=0,j=0;
const typing=document.getElementById("typing");
function type(){
 if(j<texts[i].length){
  typing.textContent+=texts[i][j++];
  setTimeout(type,100);
 }else{setTimeout(erase,1500);}
}
function erase(){
 if(j>0){
  typing.textContent=texts[i].slice(0,--j);
  setTimeout(erase,60);
 }else{
  i=(i+1)%texts.length;
  setTimeout(type,500);
 }
}
type();

window.onload=()=>{document.querySelector(".loader").style.display="none";}
