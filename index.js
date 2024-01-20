let inputt = document.querySelector('.inpt');
let imgae = document.querySelector('.img');
let btn = document.querySelector('.b');
let txt = document.querySelector('.wri');
async function utility(){
    if(inputt.value == ""){
        txt.innerHTML = "😔 Please Add Something into field😔 ";
        imgae.src = "";
    }
    try {
        let response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputt.value}`);
        let blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        imgae.src = imageUrl;
        txt.innerHTML = "Enter your text or URL";
        imgae.style.border = "6px solid rgb(0, 0, 0)";
    } 
    catch(error) {
        console.error('Error:', error);
    }
}
btn.addEventListener('click', utility);
