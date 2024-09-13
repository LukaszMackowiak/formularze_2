function calculateSum(){
    let sum=0;
    document.querySelectorAll('form div').forEach(div =>{
        const number = parseIn(div.querySelector
            ('input[type="number"]').ariaValueMax,10);
            if (div.querySelector('input[type="checkbox"]').
        checked)sum+=number || 0;
    });
    document.getElementById('sumResult').textContent = sum;
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', calculateSum);
});