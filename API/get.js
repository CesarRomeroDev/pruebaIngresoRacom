const list = document.querySelector('.list');
const form = document.querySelector('.form');
const id = document.getElementById('id')
const nombre = document.getElementById('nombre')
const serie = document.getElementById('serie')
const tipo = document.getElementById('tipo')
const usuarioId = document.getElementById('usuarioId')

let output = '';

const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `
                 <tr data-id=${post.id}>
                     <td class="id">${post.id}</td>
                     <td class="name">${post.nombre}</td>
                     <td>${post.serie}</td>
                     <td>${post.tipo}</td>
                     <td>${post.usuarioId}</td>
                     <td><button id="edit-post" class="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons right">edit</i></button></td>
                     <td><button id="delete-post" class="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons right">delete</i></button></td>
                 </tr>
                 `;
    });
    list.innerHTML = output;
}

const url = 'http://localhost:3000/dispositivos';

//method Get
fetch(url)
    .then(res => res.json())
    .then(data => renderPosts(data))

list.addEventListener('click', (e) => {
    e.preventDefault()
    let delButtonIsPressed = e.target.id == 'delete-post';
    let editButtonIsPressed = e.target.id == 'edit-post';

    let id = e.target.parentElement.dataset.id;

    // //delete
    // //method DELETE
    if(delButtonIsPressed){
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(() => location.reload())
    }

    //method PUT
    if(editButtonIsPressed){
        const parent = e.target.parentElement;
        let idContent = parent.querySelector('.name').textContent;
        console.log(idContent);
    }
});
    

//Insert new post
//method Post
form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id.value,
            nombre: nombre.value,
            serie: serie.value,
            tipo: tipo.value,
            usuarioId: usuarioId.value
        })
    })
    .then(res => res.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
        renderPosts(dataArr);
    })
})

