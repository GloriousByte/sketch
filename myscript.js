window.onload=function(){
    console.log("I am here")

    let container=document.getElementById("container")
    createGrid(16);
    function createGrid(value){
    for(let i=0;i<value;i++){
        const firstDiv = document.createElement("div");
        firstDiv.style.display="flex";
        firstDiv.style.backgroundColor="pink";
        /*firstDiv.style.margin="2px";*/
        firstDiv.style.flexBasis="0";
        firstDiv.style.flexGrow="1";
        firstDiv.style.flexShrink="1";
        firstDiv.style.minWidth="0";
        firstDiv.style.minHeight="0";
        container.appendChild(firstDiv);

        for (let j=0;j<value;j++){
            const div = document.createElement("div");
            div.style.backgroundColor="blue";
            /*div.style.border="2px";*/
            div.style.borderColor="black";
            div.style.display="flex";
           /* div.style.margin="2px";*/
            div.style.flexBasis="0";
            div.style.flexGrow="1";
            firstDiv.style.flexShrink="1";
            firstDiv.style.minWidth="0";
            firstDiv.style.minHeight="0";
            div.classList.add("littleBox");
            firstDiv.appendChild(div);
       
        }
          
        /*for (let j=0;j<15;j++){
            const div = document.createElement("div");
            div.style.backgroundColor="blue";
            div.style.border="2px";
            div.style.borderColor="black";
            div.style.display="flex";
            div.style.margin="2px";
            div.classList.add("littleBox");
            firstDiv.appendChild(div);
            
        }*/
        /*const breaker= document.createElement("br");
        container.appendChild(breaker);*/

    }
}
    let box=document.getElementsByClassName("littleBox");
        for(let i=0;i<box.length;i++){
            box[i].addEventListener("mouseenter", function(e){e.target.style.backgroundColor="black";})

        }

    let pixelChoice=document.getElementById("selectPixel");
        pixelChoice.addEventListener("click",()=>{
            let val = window.prompt("Enter value of new grid");
            let value = Number(val);
            if(value>100){
                alert("number too big")
                container.innerHTML="";
                createGrid(16);
                let box=document.getElementsByClassName("littleBox");
                for(let i=0;i<box.length;i++){
                    box[i].addEventListener("mouseenter", function(e){e.target.style.backgroundColor="black";})
    
                 }
            }
            else{
            container.innerHTML="";
            createGrid(value);
            let box=document.getElementsByClassName("littleBox");
            for(let i=0;i<box.length;i++){
                box[i].addEventListener("mouseenter", function(e){e.target.style.backgroundColor="black";})

             }
         }


        })

    
    
    
  /* let container=document.getElementById("container")
    for(let i=0;i<16;i++){
        for (let j=0;j<15;j++){
            const div = document.createElement("div");
            div.style.width="20px";
            div.style.height="20px";
            div.style.backgroundColor="blue";
            div.style.border="2px";
            div.style.borderColor="black";
            div.style.display="inline-block";
            div.style.margin="2px";
            div.classList.add("littleBox");
            container.appendChild(div);
            
        }
        const breaker= document.createElement("br");
        container.appendChild(breaker);

    }*/

  
}