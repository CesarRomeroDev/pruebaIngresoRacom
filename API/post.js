var form = document.getElementById('form')

form.addEventListener('submit', function(e){
    //aauto submision of the form

    e.preventDefault()

    var id = document.getElementById('id').value
    var nombre = document.getElementById('nombre').value
    var serie = document.getElementById('serie').value
    var tipo = document.getElementById('tipo').value
    var usuarioId = document.getElementById('usuarioId').value


    //fetch post request

    fetch("http://localhost:3000/dispositivos",{
        method: 'POST',
        body: JSON.stringify({
            id:id,
            nombre:nombre,
            serie:serie,
            tipo:tipo,
            usuarioId:usuarioId
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
})