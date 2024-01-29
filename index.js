function tile(url, left, bottom, width, height){
    for(let h=0; h < height; h++){
        for(let w=0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src= url
    object.style.position = 'fixed'
    object.style.left= left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
if(direction === null){
    character.src = 'assets/green-character/static.gif'}
if(direction === 'west'){
    character.src = 'assets/green-character/west.gif'}
if(direction === 'north'){
    character.src = 'assets/green-character/north.gif'}
if(direction === 'east'){
    character.src = 'assets/green-character/east.gif'}
if(direction === 'south'){c
    haracter.src = 'assets/green-character/south.gif'}
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

function move(character) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'}

    function moveWithArrowKeys(left, bottom, onDirectionChange){
        let direction = null;
            let x = left;
            let y = bottom;
        
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            
            function moveCharacter(){ 
                if(direction === 'west'){x-=1}
                if(direction === 'north'){y+=1}
                if(direction === 'east'){x+=1}
                if(direction === 'south'){y-=1}

                element.style.left = x + 'px'
                element.style.bottom = y + 'px'}
            
            setInterval(moveCharacter, 1)
            
            document.addEventListener('keydown', function(e){
                if(e.repeat) return;
            
                if(e.key === 'ArrowLeft'){direction = 'west'}
                if(e.key === 'ArrowUp'){direction = 'north'}
                if(e.key === 'ArrowRight'){direction = 'east'}
                if(e.key === 'ArrowDown'){direction = 'south'}
                onDirectionChange(direction)
            })
            
            document.addEventListener('keyup', function(e){
                direction = null
                onDirectionChange(direction)})
        }
}

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
