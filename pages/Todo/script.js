const $=s=>document.querySelector(s)
const todoListEl = $('#todoList')
let saveStatus
let base=[
    {
        id:1,
        label:'Task 1',
        status:'Pending'
    },{
        id:2,
        label:'Task 2',
        status:'In Progress'
    },{
        id:3,
        label:'Task 3',
        status:'Completed'
    }
]

// let x=JSON.stringify({name:"sarah"})
// let y=JSON.stringify([1,2,3,4,[3,5]])
// console.log(JSON.parse(x))
// console.log(JSON.parse(y))
if(localStorage['tasks']){
    base=JSON.parse(localStorage['tasks'])
}

base.forEach(obj=>{
    printView(obj)
})


$('#save').onclick = function(){
    if(!saveStatus){
        add()
    }

}

function add(){
    const taskInput = $('#todoField')
    const statusSelect = $('#todoStatus')

    let task={
        id:Date.now(),
        label:taskInput.value,
        status:statusSelect.value
    }
    printView(task)
    base.push(task)
   localStorage['tasks']=JSON.stringify(base)

}

    function printView(value) {
    let badgeClass= " "

    if (value.status === "Pending"){
        badgeClass = "bg-secondary"
    } else if (value.status === "In Progress"){
        badgeClass = "bg-warning";
    } else if (value.status === "Completed"){
        badgeClass = "bg-success"
    }

    todoListEl.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <span class="task-text">${value.label}</span>
                <span class="badge ${badgeClass} ms-2 task-status">${value.status}</span>
            </div>
            <button class="btn btn-sm btn-danger delete-btn" data-id="${value.id}">Delete</button>
        </li>
    `
}

todoListEl.onclick = function(e) {
    if (e.target.classList.contains('delete-btn')) {
        let id= +e.target.getAttribute('data-id')
        base=base.filter(res=>res.id!==id)
        e.target.closest('li').remove()
        localStorage['tasks']=JSON.stringify(base)
    }
}
