form = document.getElementById('user');
form.addEventListener("submit", event => {
    event.preventDefault();

    let name = document.getElementById('name');

    switch( name.value.toLowerCase() )
    {
        default:
            // store user's name
            localStorage.setItem('Name', name.value);

            //migrate to the next page (dec.html) --where all the work will be done
            window.location.href = "dec.html";
        break;

    }

    
    
    
    
    
});