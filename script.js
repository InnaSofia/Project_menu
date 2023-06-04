let isOpen = false
function openMenu(){
    const  conteinerMenu = document.getElementById("myConteinerMenu")



    if(isOpen){
        conteinerMenu.style.display = "none"
        isOpen = false
    }else{
        conteinerMenu.style.display = "flex"
        isOpen = true
    }

    document.getElementById("buttonMenu").style.backgroundColor = "#ffffff"
    document.getElementById("buttonMenu").style.borderRadius = "100%"
    document.getElementById("buttonMenu").style.width = "50px"
    document.getElementById("buttonMenu").style.height = "50px"
    document.getElementById("buttonMenu").style.border = "1px solid #ff6b35"
    document.getElementById("buttonMenu").style.position = "relative"
   

}


