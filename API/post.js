const form = document.querySelector('.form');

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