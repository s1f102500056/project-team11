document.addEventListener("DOMContentLoaded",function(){
    const side_button = document.getElementById("sidebutton")
    

    side_button.addEventListener("click",function() {
        const side_ber = document.getElementById("sideber")
        side_ber.classList.toggle("closeul")
        side_button.textContent

        if (side_ber.classList.contains("closeul")){
            side_button.textContent = "開く"
        } else {
            side_button.textContent = "閉じる"
        }
    });
})