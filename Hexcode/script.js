window.onload = () =>{
    main();

}

function main(){
    const root = document.getElementById('root')
    const btn = document.getElementById('btn')
    const hex = document.getElementById('hexvalue')


    

    btn.addEventListener('click', function(){
        const bgColor = generateColors()
        root.style.backgroundColor = bgColor;
        hex.value = bgColor
    })

}

function generateColors() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return (`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`)


}

