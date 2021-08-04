let url = 'http://localhost:3000/dispositivos' //peticion

fetch(url)
    .then(res => res.json())
    .then(data => mostrarData(data))
    .catch(err => console.log(err))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].serie}</td><td>${data[i].tipo}</td><td>${data[i].usuarioId}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}
