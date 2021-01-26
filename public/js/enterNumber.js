const enterNumber = (value) => {
    const input = document.getElementById("input");
    input.value += value;
    console.log(value);
}

const cBtn = document.getElementById("c");
const submitBtn = document.getElementById("submit");

cBtn.addEventListener('click', () => {
    const input = document.getElementById("input");
    input.value = "";
})

submitBtn.addEventListener('click', () => {
    const input = document.getElementById("input");
    if(input.value == '74')$('#successModal').modal('show');
    else $('#failureModal').modal('show');
})

const btn = document.querySelectorAll(".btn");
for(let i = 0;i<btn.length;i++){
    try {
        const btn1 = document.getElementById(i);
        btn1.addEventListener('click',() => {
            enterNumber(i)
        });
    } catch (error) {
        
    }
}