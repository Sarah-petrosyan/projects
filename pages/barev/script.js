
let lists = [
    // ----- Existing 10 items -----
    {
        id: 1, name: "Arman", exit: false, age: 43, travel:78, birthplace: "Yerevan",
        car: "Hyundai Elantra", accountBalance: 1250000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 2, name: "Mariam", exit: false, age: 28, travel:65, birthplace: "Gyumri",
        car: false, accountBalance: 890000, maritalStatus: "married",
        children: 1, isEmployed: true
        ,
    },
    {
        id: 3, name: "Hayk", exit: true, age: 31, travel:82, birthplace: "Vanadzor",
        car: "Toyota Camry", accountBalance: 350000, maritalStatus: "married",
        children: 2, isEmployed: true
    },
    {
        id: 4, name: "Ani", exit: false, age: 19, travel:60, birthplace: "Sevan",
        car: false, accountBalance: 42000, maritalStatus: "single", children: 0,
        isEmployed: false
    },
    {
        id: 5, name: "David", exit: false, age: 16, travel:75, birthplace: "Stepanakert",
        car: "Lada Priora", accountBalance: 65000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 6, name: "Nare", exit: false, age: 24, travel:67, birthplace: "Abovyan",
        car: "Mazda 3", accountBalance: 210000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 7, name: "Gevorg", exit: false, age: 16, travel:70, birthplace: "Hrazdan",
        car: false, accountBalance: 37000, maritalStatus: "single",
        children: 2, isEmployed: false
    },
    {
        id: 8, name: "Sona", exit: true, age: 35, travel:63, birthplace: "Kapan",
        car: "Nissan Juke", accountBalance: 40000, maritalStatus: "married",
        children: 3, isEmployed: false
    },
    {
        id: 9, name: "Tigran", exit: false, age: 29, travel:80, birthplace: "Artashat",
        car: "Mercedes C200", accountBalance: 520000, maritalStatus: "married",
        children: 1, isEmployed: true
    },
    {
        id: 10, name: "Lilit", exit: false, age: 21, travel:68, birthplace: "Dilijan",
        car: false, accountBalance: 75000, maritalStatus: "single",
        children: 0, isEmployed: false
    },

    // ----- Added 10 NEW items -----
    {
        id: 11, name: "Karine", exit: false, age: 33, travel:62, birthplace: "Echmiadzin",
        car: "Kia Rio", accountBalance: 185000, maritalStatus: "married",
        children: 1, isEmployed: true
    },
    {
        id: 12, name: "Gor", exit: true, age: 27, travel:83, birthplace: "Charentsavan",
        car: false, accountBalance: 92000, maritalStatus: "single",
        children: 0, isEmployed: false
    },
    {
        id: 13, name: "Ella", exit: false, age: 30, travel:58, birthplace: "Armavir",
        car: "Honda Civic", accountBalance: 310000, maritalStatus: "married",
        children: 2, isEmployed: true
    },
    {
        id: 14, name: "Vahram", exit: false, age: 40, travel:76, birthplace: "Gavar",
        car: "BMW 320", accountBalance: 890000, maritalStatus: "married",
        children: 3, isEmployed: true
    },
    {
        id: 15, name: "Lia", exit: true, age: 22, travel:61, birthplace: "Spitak",
        car: false, accountBalance: 15000, maritalStatus: "single",
        children: 0, isEmployed: false
    },
    {
        id: 16, name: "Arsen", exit: false, age: 36, travel:85, birthplace: "Ijevan",
        car: "Lexus RX350", accountBalance: 1400000, maritalStatus: "married",
        children: 2, isEmployed: true
    },
    {
        id: 17, name: "Tatev", exit: false, age: 26, travel:66, birthplace: "Yeghvard",
        car: "Volkswagen Golf", accountBalance: 265000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 18, name: "Samvel", exit: false, age: 45, travel:81, birthplace: "Alaverdi",
        car: "Toyota RAV4", accountBalance: 780000, maritalStatus: "married",
        children: 4, isEmployed: true
    },
    {
        id: 19, name: "Rima", exit: false, age: 31, travel:64, birthplace: "Masis",
        car: false, accountBalance: 56000, maritalStatus: "single",
        children: 1, isEmployed: false
    },
    {
        id: 20, name: "Narek", exit: true, age: 20, travel:77, birthplace: "Kasakh",
        car: "VAZ 2107", accountBalance: 22000, maritalStatus: "single",
        children: 0, isEmployed: true
    },

    {

        id: 21,
        name: "Elina",
        exit: false,
        age: 32,
        travel: 0,
        birthplace: "Artik",
        car: "Hyundai Tucson",
        accountBalance: 345000,
        maritalStatus: "married",
        children: 1,
        isEmployed: true
    },
    {
        id: 22,
        name: "Rafael",
        exit: false,
        age: 38,
        travel:8,
        birthplace: "Ararat",
        car: false,
        accountBalance: 125000,
        maritalStatus: "single",
        children: 0,
        isEmployed: false
    },
    {
        id: 23,
        name: "Silva",
        exit: true,
        age: 27,
        travel: 5,
        birthplace: "Martuni",
        car: "Ford Fiesta",
        accountBalance: 47000,
        maritalStatus: "single",
        children: 1,
        isEmployed: true
    },
    {
        id: 24,
        name: "Ashot",
        exit: false,
        age: 50,
        travel:82,
        birthplace: "Berd",
        car: "Mercedes E300",
        accountBalance: 1620000,
        maritalStatus: "married",
        children: 3,
        isEmployed: true
    },
    {
        id: 25,
        name: "Milena",
        exit: false,
        age: 23,
        travel:67,
        birthplace: "Hrazdan",
        car: false,
        accountBalance: 52000,
        maritalStatus: "single",
        children: 0,
        isEmployed: true
    },
    {
        id: 26,
        name: "Arthur",
        exit: false,
        age: 41,
        travel: 85,
        birthplace: "Gyumri",
        car: "Toyota Corolla",
        accountBalance: 298000,
        maritalStatus: "married",
        children: 2,
        isEmployed: true
    },
    {
        id: 27,
        name: "Marine",
        exit: true,
        age: 36,
        travel:2,
        birthplace: "Sisian",
        car: "Renault Megane",
        accountBalance: 88000,
        maritalStatus: "married",
        children: 2,
        isEmployed: false
    },
    {
        id: 28,
        name: "Eduard",
        exit: false,
        age: 30,
        travel:5,
        birthplace: "Abovyan",
        car: false,
        accountBalance: 41000,
        maritalStatus: "single",
        children: 0,
        isEmployed: true
    },
    {
        id: 29,
        name: "Tamara",
        exit: false,
        age: 34,
        travel:0,
        birthplace: "Vanadzor",
        car: "Mazda 6",
        accountBalance: 335000,
        maritalStatus: "married",
        children: 2,
        isEmployed: true
    },
    {
        id: 30,
        name: "Karen",
        exit: false,
        age: 22,
        travel:0,
        birthplace: "Yerevan",
        car: "Opel Astra",
        accountBalance: 67000,
        maritalStatus: "single",
        children: 0,
        isEmployed: false
    }
];


const filter = {
    isCar: null,
    children: null,
    isEmployed: null,
    isMarital:null,
    isExit: null,
    ageMin: null,
    ageMax: null,
    city:null

}
const $=el=>document.querySelector(el)
// function $(el){
//     return document.querySelector(el)
// }

function informationUpdate(value){
    let listEl=$('.list')
    listEl.innerHTML=''
    value.forEach(res=>{
        listEl.innerHTML+=`
     <div class="card">
        <h3>${res.name}</h3>
        <p><span>birthplace</span> ${res.birthplace}</p>
        <p><span>Age</span>${res.age} </p>
        <p>Marital <span>${res.maritalStatus}</span></p>
        <p>exit <span>${res.exit?'yes':'no'}</span></p>
        <p>car <span>${res.car?'yes':'no'}</span></p>
        <p>work <span>${res.isEmployed?'yes':'no'}</span></p>
        <p>children <span>${res.children}</span></p>
        <p>accountBalance <span>${res.accountBalance}</span></p>
        <p>travel <span>${res.travel}</span></p>
    </div>
     `
    })
}

informationUpdate(lists)

$('#hasCar').oninput=function (){
    filter.isCar=this.value==='all'?null: !!+this.value
    filterList()
}
$('#children').oninput=function (){
    filter.children=this.value==='all'?null: +this.value
    filterList()
}

$('#isEmployed').oninput=function(){
    filter.isEmployed = this.value === 'all' ? null : !!+this.value
    filterList()
}
$('#isExit').oninput=function(){
    filter. isExit= this.value=== 'all' ? null : !!+this.value
    filterList()
}
$('#birthplace').oninput = function () {
    filter.city = this.value === 'all' ? null : this.value
    filterList()
}
$('#maritalStatus').oninput = function () {
    filter.isMarital = this.value === 'all' ? null : this.value
    filterList()
}
$('#minAge').oninput = function () {
    filter.ageMin = this.value === '' ? null : +this.value
    filterList()
}

$('#maxAge').oninput = function () {
    filter.ageMax = this.value === '' ? null : +this.value
    filterList()
}


function filterList(){
    let data=lists.filter(res=>(
        (filter.isCar===null || !!res.car === filter.isCar )
        &&(filter.children===null || res.children===filter.children)
        &&(filter.isEmployed === null || res.isEmployed === filter.isEmployed)
        &&(filter.isExit === null || res.exit === filter.isExit)
        &&(filter.city === null || res.birthplace === filter.city)
        &&(filter.isMarital === null || res.maritalStatus === filter.isMarital)
        &&(filter.ageMin === null || res.age >= filter.ageMin)
        &&(filter.ageMax === null || res.age <= filter.ageMax)

    ))
    informationUpdate(data)
}


