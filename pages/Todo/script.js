const listGroupEl = document.querySelector('#lists')
document.querySelector('#saveBtn').onclick = function () {
    const fieldEl = document.querySelector('#valueInput')


    listGroupEl.innerHTML += `<li>${fieldEl.value}
        <button>Delete</button>
        <select class="form-select form-select-sm" style="width:140px; margin-left:auto; margin-right:10px;">
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </li>`
}

listGroupEl.onclick = function (e) {
    if (e.target.tagName.toLowerCase() === 'button') {
        e.target.closest('li').remove();
    }
}


