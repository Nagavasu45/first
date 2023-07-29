const addTaskPopup=document.getElementById("popupbox")
const cardContainer=document.getElementById("cardcontainer")
const newCardName=document.getElementById("cardname")
const ss1=document.getElementById("secondsubleft")
const ss2=document.getElementById("plus")
const op1=document.getElementById("op1")
var count=0;
var res;


const bb1=document.getElementById("bb1")
const bb2=document.getElementById("hbutton")
const bb3=document.getElementById("hdiv")
var isSelected=false



function showAddTask(){
    document.getElementById('blur1').style.filter="blur(10px)";
    
    addTaskPopup.classList.remove("hide")
}

function hideAddTask(){
    document.getElementById('blur1').style.filter="blur(0px)";
    addTaskPopup.classList.add("hide")
    
    }
let cardId=0;
let pop2=0;
function addcard(){
    console.log("uff")
    if(isSelected){
        bbh();
    }
    cardId++;
    

    var box = document.getElementById('in1');
    var newcard=document.createElement("div")
    var line=document.createElement("hr")
    var cardtitle=document.createElement("h2")
    var itemList=document.createElement("div")
    var extra=document.createElement("div")
    var deleteButton=document.createElement("img")
    var addItem=document.createElement("button")
    extra.classList.add("con")
    
    extra.appendChild(deleteButton)
    extra.appendChild(addItem)
    
    
    newcard.setAttribute("id",cardId);
    newcard.appendChild(cardtitle);
    newcard.appendChild(line)
    newcard.appendChild(itemList)
    newcard.appendChild(extra)
    
     
    cardContainer.appendChild(newcard)
    newcard.classList.add("newlyadd")
   
    cardtitle.innerText=newCardName.value;
    deleteButton.src="delete.PNG"
    deleteButton.classList.add("buttondelete")
      
    addItem.innerText="+";
    addItem.classList.add("buttonplus")
    
   
  
    cardtitle.addEventListener("click", function(){
        
        
        var x = document.querySelectorAll(".newlyadd"); 
        console.log(x)
        for (let i=0;i<x.length;i++){
            x[i].classList.add("hide")
        }
        ss1.classList.add("hide")
        ss2.classList.add("hide")
        newcard.classList.add("newlyadd1")      
        res=newcard
        bb3.innerText=cardtitle.innerText;
        
        console.log("seee3")
        
        newcard.classList.remove("hide")
        bb1.classList.remove("hide")
        
        isSelected=true;
        op1.classList.add("op2")
        
        hideAddTask();
    })
    
    
    count++;
    deleteButton.addEventListener('click',function(){
        newcard.remove()
        count--;
        if (count===0)
        box.classList.remove('hide')

        
    })
    addItem.addEventListener('click',function(){
        console.log("hihiiiiiiiiii")


        pop2++
        var sdiv=document.createElement("div")
        var sh2=document.createElement("h2")
        var sinput=document.createElement("input")
        
        var sbr=document.createElement("div")
        sbr.classList.add("mi")
        var sb1=document.createElement("button")
        var sb2=document.createElement("button")
        //styles adding...
        sdiv.setAttribute("id",pop2)
        sdiv.classList.add("popupbox1")
        sh2.classList.add("b2")
        sh2.innerText="Add new tasks"
        // sinput.setAttribute("id",pop2)
        sinput.classList.add("cardname")
        sb1.classList.add("b11")
        sb1.innerText="Add"
        sb2.classList.add("b11")
        sb2.innerText="close"
        sdiv.appendChild(sh2)
        sdiv.appendChild(sinput)
        sdiv.appendChild(sbr)
        sdiv.appendChild(sb1)
        sdiv.appendChild(sb2)
        cardContainer.appendChild(sdiv)
        sb1.addEventListener("click",function(){
            
            secondpopup(itemList,sinput); 
        })
        sb2.addEventListener("click",function(){
            sdiv.classList.add("hide")
        })
        // secondpopup(itemList);    
     })
    
    hideAddTask();
    box.classList.add('hide')
    
    
    
}
function bbh(){
    console.log("exec")
    bb1.classList.add("hide")
    var x = document.querySelectorAll(".newlyadd"); 
    for (let i=0;i<x.length;i++){
        x[i].classList.remove("hide")
    }

    
    
    ss1.classList.remove("hide")
    ss2.classList.remove("hide")
    res.classList.remove("newlyadd1")
    op1.classList.remove("op2")
   
}



// second pop up box
function secondpopup(itemList,sinput){
    // bb1++;
    var tdiv1=document.createElement("div")
    // tdiv1.setAttribute("id",bb1)
    var tspan1=document.createElement("span")
    tspan1.innerText=sinput.value;
    
    tspan1.classList.add("ttx1")
    var tbutton=document.createElement("button")
    tbutton.innerText="mark done"
    tbutton.classList.add("tb1")
    // tbutton.setAttribute("id",bb1)
    tdiv1.appendChild(tspan1)
    tdiv1.appendChild(tbutton)
    
    itemList.appendChild(tdiv1)
    tbutton.addEventListener("click",function(){
        console.log("remo")
        tbutton.style.display="none"
        console.log("remo1")
        tspan1.classList.remove("ttx1")
        console.log("remo2")
        tspan1.classList.add("ttx2")
        

    })

}
