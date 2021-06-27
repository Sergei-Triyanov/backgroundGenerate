// Константы 
const container = document.querySelector('.container');

// Цикл генерации блоков 
for(let i=1; i<=100; i++){
    const blocks = document.createElement('div')
    blocks.classList.add('block');
    container.appendChild(blocks);
}

// функция добавления анимации через anime.js
function generate(){
    anime({
        targets: ".block",
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        scale: function(){
            return anime.random(1, 4);
        },
    })
}
generate()