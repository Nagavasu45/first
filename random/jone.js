var ranno=Math.floor(Math.random()*100)+1;
console.log(ranno)
var ops=100;
var highscore=0;
function checkS(){
    let n1=document.getElementById("t11").value;
    if (ops!=0){
        ops--;

   
    if (n1<ranno){
        document.getElementById('ch1').innerText="Your Guess Is Low"
        document.querySelector('h3').innerHTML=`💯Chances ${ops}`
    }
    else if(n1>ranno){
        document.getElementById('ch1').innerText="Your Guess Is High"
        document.querySelector('h3').innerHTML=`💯Chances ${ops}`
    }
    else{
        document.getElementById('ch1').innerText="🤩🤩Hurry You Won🤩🤩"
        document.querySelectorAll('h3')[0].innerText=`💯Chances ${ops}`
        if(ops>highscore){
        document.querySelectorAll('h3')[1].innerText=`🥇Highscore ${ops}`
        document.getElementsByClassName("con1")[0].style.backgroundColor="green"
        document.getElementsByClassName("con2")[0].style.backgroundColor="green"
        highscore=ops;
        }
        else{
            document.querySelectorAll('h3')[1].innerText=`🥇Highscore ${highscore}`
        }
        
        document.getElementById('b3').style.display='none';
        document.getElementById('box1').innerHTML=ranno;
    }
}
else{
    document.getElementById('ch1').innerText="Game Over"
}
}
function pagain(){
   
    document.getElementById('ch1').innerText="Start Guessing.....!"
    document.querySelector('h3').innerHTML='💯Chances 100'
    ranno=Math.floor(Math.random()*100)+1;
    console.log(ranno)
    ops=100;
    document.getElementById('box1').innerHTML='?';
    document.getElementById('b3').style.display='block';
    document.getElementsByClassName("con1")[0].style.backgroundColor="black";
    document.getElementsByClassName("con2")[0].style.backgroundColor="black";

}