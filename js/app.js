const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const AllSections= document.querySelector('.main-content');

function PageTransitions() {
    //Boton activado
    sectBtn.forEach(sectBtnitem => sectBtnitem.addEventListener('click',function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn',' ');
        this.className += 'active-btn';
    }));
};
function PageTransitions2() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {   
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    //Secciones activa
    /*AllSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        if (id) {
            //remover selecion de otros botones
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            //
            sections.forEach(section=>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })*/
};
PageTransitions();
PageTransitions2();
