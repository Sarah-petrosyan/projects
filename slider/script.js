
const images=['https://fastly.picsum.photos/id/1018/1200/800.jpg?hmac=ytfeVLw2v0Qw-AO63D1RgGpbOvqrIYQ1Gjj-4iRk8VI',
    'https://fastly.picsum.photos/id/1015/1200/800.jpg?hmac=Fpx-97bpiJi8RKyXmx8pd8pdX2un_8q1Zq4WEGa6z5g',
    'https://fastly.picsum.photos/id/1024/1200/800.jpg?hmac=AHCLjumsNAN3VYMOtDq_ewu2pLpIygL8KbUloCjOYWc',
    'https://fastly.picsum.photos/id/1036/1200/800.jpg?hmac=8Gmy38CqLeLVvwtnkPDX-EE6SX2OT2Puc6ieJNl1wAA']


const slideImageEl=document.querySelector(".slide img")
let index=0
slideImageEl.src=images[index]

document.querySelector(".next").onclick=function(){
    index++

    if(!images[index]){
        index=0
    }
    slideImageEl.src=images[index]

}

document.querySelector(".prev").onclick=function(){
    index--

    if(!images[index]){
        index=images.length-1
    }
    slideImageEl.src=images[index]

}

const dots=document.querySelector('.dots')
images.forEach(function(res,i){
    dots.innerHTML+=`
    <button aria-current="${index===i?'true':'false'}" id="dots" data-index="${i}"></button>
    `
})

document.querySelector(".dots").onclick=function(e){
    document.querySelector('.dots button[aria-current="true"]').setAttribute('aria-current',"false")

    index= +e.target.getAttribute('data-index')
    slideImageEl.src=images[index]
    e.target.setAttribute('aria-current',"true")


}
