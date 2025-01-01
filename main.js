//heartbeat
let i = 0;
document.addEventListener("DOMContentLoaded", function () {
    const heart = document.getElementById('box2');
    setInterval(()=>{
        if( i % 2 === 1 )
        {
            heart.style.transform = 'scale(2)';
        } else{
            heart.style.transform = 'scale(1.5)';
        }
        i++;
        //no integer overflows
        if( i > 31 )
            i = 0;
    }, 500);
    
});