let exb_menu = false;

const mob_menu = document.querySelector("#menu_button");
let sections = document.querySelector("#menu");

const button_props = {
    colormain: "#8158c5",
    colorhover: "black",
    linemain: "#ffa200",
    linehover: "white"
}






function Act_MobMenu() {

    if (exb_menu == false) {

        sections.style.display = "flex";
        mob_menu.style.background = button_props.colorhover;
        mob_menu.children[0].style.background = button_props.linehover;
        mob_menu.children[1].style.background = button_props.linehover;
        mob_menu.children[2].style.background = button_props.linehover;




        exb_menu = true;

    } else {
        sections.style.display = "none";
        mob_menu.style.background = button_props.colormain;
        mob_menu.children[0].style.background = button_props.linemain;
        mob_menu.children[1].style.background = button_props.linemain;
        mob_menu.children[2].style.background = button_props.linemain;
        exb_menu = false;
    }

}




window.addEventListener('resize', function () {
    let largura = window.screen.width;


    if (largura > 1024) {

        sections.children[0].style.display = "flex";
        sections.style.display = "block";
    } else if (largura < 1024 && exb_menu == false) {
        sections.style.display = "none";
    }
})


