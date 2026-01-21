const container = document.getElementById('container');
const restartBtn = document.getElementById('restart-div').firstElementChild;
const outcome = document.getElementById('outcome');
restartBtn.addEventListener('click',()=>{
    location.reload();
})
restartBtn.style.display = 'none';
outcome.style.display = 'none';

generateRandomBoard();
let prev = null;




function generateRandomBoard(){
    let vals = [1,2,3,4,5,6,7,'#','#'];
    vals = vals.sort(()=>Math.random()-0.5);

    Array.from(container.children).forEach((el,index)=>{
        el.innerHTML = `<span id=${index}>${vals[index]}</span>`
        el.firstChild.style.display = 'none';
        el.addEventListener('click',()=>handleClick(el.firstChild));
    })
}


function handleClick(el){
    el.style.display = 'initial';
    if(prev){
        if(prev.id!==el.id && prev.value===el.innerText){
            container.style.pointerEvents = 'none';
            restartBtn.style.display = 'initial';
            outcome.style.display = 'initial';
        }
        else if(prev.id === el.id) return;
        else{
            prev = null;
            container.style.pointerEvents = 'none';
            setTimeout(() => {
                Array.from(container.children).forEach(el=>{
                    el.firstChild.style.display = 'none';
                })
                container.style.pointerEvents = 'initial';
            }, 200);
        }
    }
    else{
        prev = {
            id: el.id,
            value: el.innerText
        }
    }
}