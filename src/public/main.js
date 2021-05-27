const update = document.querySelector('#update-button');

update.addEventListener('click', _ => {
    fetch('/products', {
        method: 'put',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing'
        })
    })
})