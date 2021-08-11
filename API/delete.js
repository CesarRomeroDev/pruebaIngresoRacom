const list = document.querySelector('.list');

fetch(url)
    .then(res => res.json())
    .then(data => renderPosts(data))

list.addEventListener('click', (e) => {
    console.log('hello');
    // e.preventDefault()
    // let delButtonIsPressed = e.target.id == 'delete-post';
    // let editButtonIsPressed = e.target.id == 'edit-post';

    // // let id = e.target.parentElement.dataset.id;
    // console.log(e.target.parentElement.dataset.id)

    // //delete
    // //method DELETE
    // if(delButtonIsPressed) {
    //     fetch(`${url}/sdkkfhsdkfjsd`)
    //     //     method: 'DELETE',
    //     // })
    //     // .then(res => res.json())
    //     // .then(() => location.reload())
    // }
});