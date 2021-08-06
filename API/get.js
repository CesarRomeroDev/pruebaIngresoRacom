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
            <tbody>
                 <tr>
                     <td>${post.id}</td>
                     <td>${post.nombre}</td>
                     <td>${post.serie}</td>
                     <td>${post.tipo}</td>
                     <td>${post.usuarioId}</td>
                     <td><button id="edit-post" class="btn waves-effect waves-light" type="submit" name="action">Editar<i class="material-icons right">send</i></button></td>
                     <td><button id="delete-post" class="btn waves-effect waves-light" type="submit" name="action">Borrar<i class="material-icons right">send</i></button></td>
                 </tr>
            </tbody>
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

    // let id = e.target.parentElement.dataset.id;
    console.log(e.target.parentElement.dataset.id)

    //delete
    //method DELETE
    if(delButtonIsPressed) {
        fetch(`${url}/sdkkfhsdkfjsd`)
        //     method: 'DELETE',
        // })
        // .then(res => res.json())
        // .then(() => location.reload())
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

