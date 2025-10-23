const redEl=document.querySelector('#red')
const orangeEl=document.querySelector('#orange')
const greenEl=document.querySelector('#green')

let output={
    value:0,
    status:'up'
}
if( output.status==='up'){
    output.value--
}else if(output.value>0 && output.status==='down'){
    output.value++
}
document.querySelector("#oneBtn").onclick=function(){
start()
}
function start(){
    if(output.status==='up'){
        up()
    }else{
        down()
    }
    document.querySelector("#counter").innerText=output.value
}

start()
function up(){
  output.value++
   if(output.value<=21){
       greenEl.classList.add('active')
   }else if(output.value>=22 && output.value<=24){
       greenEl.classList.remove('active')
       orangeEl.classList.add('active')
   }else if(output.value===25){
       orangeEl.classList.remove('active')
       redEl.classList.add('active')
   }
    if(output.value===25){
        output.status='down'
    }
}

function down(){
if(output.value>0){
    output.value--
}

    // if(output.value===0){
    //
    // }else if (output.value>25){
    //     redEl.classList.remove('active')
    // }
    if(output.value<=25 && output.value>3){
        redEl.classList.add('active')
    }
    else if(output.value<=3 && output.value>0){
        redEl.classList.add('active')
        orangeEl.classList.add('active')
    }else if(output.value===0){
        redEl.classList.remove('active')
        orangeEl.classList.remove('active')
        greenEl.classList.add('active')
        output.status='up'
    }

}


