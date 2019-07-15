const log = console.log;
const btn = document.querySelector('#todo > button');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

const ready_btns = document.querySelectorAll('#todo_list #ready');
ready_btns.forEach((readyBtn) => {
    readyBtn.addEventListener('click', done);
})




log(btn)
btn.addEventListener('click', submit);


function submit(e) {
    e.preventDefault();
    log(
        title.value,
        description.value
    )

    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            title: title.value,
            description: description.value
        })
    }

    fetch('/todo', options)
        .then((r) => {
            console.log(r)
            return r.json()
        })
        .then((result) => {
            console.log(result)
            if (result.ok) window.location.reload();
            else alert('Something wrong!!!')
        })

}

function done(e) {
    log(e.target.dataset.id)

    const id = e.target.dataset.id;


    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        // body: JSON.stringify({
        //     id
        // })
    }

    fetch('/todo/' + id, options)
        .then((r) => {
            console.log(r)
            return r.json()
        })
        .then((result) => {
            console.log(result)
            if (result.ok) window.location.reload();
            else alert('Something wrong!!!')
        })

}