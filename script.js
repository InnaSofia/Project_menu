let isOpen = false
function openMenu(){
    const  conteinerMenu = document.getElementById("myConteinerMenu")
    let changeImage = document.getElementById("image")



    if(isOpen){
        conteinerMenu.style.display = "none"
        isOpen = false
        changeImage.src = 'menu.png'
    }else{
        conteinerMenu.style.display = "flex"
        isOpen = true
        changeImage.src = 'close.png'
    }

    
}


