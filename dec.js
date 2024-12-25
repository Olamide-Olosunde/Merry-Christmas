let count = 0;
// let on = 0;

function dynamicScreenColor(){
    t = count % 5;
    if( t == 0 )
    {
        document.body.style.backgroundColor = 'green';
    } else if( t == 1 )
    {
        document.body.style.backgroundColor = 'red';
    } else if( t == 2 )
    {
        document.body.style.backgroundColor = 'gold';
    } else if( t == 3 )
    {
        document.body.style.backgroundColor = 'blue';
    } else if( t == 4 )
    {
        document.body.style.backgroundColor = 'black';
    }
    // else if( t == 5 )
    // {
        // document.body.style.backgroundColor = '';
    // }
    
    count++;

    //just to prevent an integer overflow
    if( count > 36 )
        count = 0;

}

let repeat = 0;
function Onn()
{
    let toggle = document.getElementById('toggle');
    // toggle.innerHTML = 'Clicked';
    repeat++;
    var sample = 0;
    
    setInterval(() => {
        dynamicScreenColor()
        // sample++;
    }, 1000);
}

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