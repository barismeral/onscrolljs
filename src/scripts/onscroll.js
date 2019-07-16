'use strict';


function onscroll() {

    this.components;
 
    this.start = () => {

        window.addEventListener('load', this.initComponents);
    
        window.addEventListener('scroll', this.animate);
        

    }

    this.initComponents = () => {

        this.components = document.querySelectorAll("[data-osc]");
    
        this.components.forEach(item => {

            item.style.opacity = "0";

            let distance = (item.dataset.oscDistance == undefined)? "50px" : item.dataset.oscDistance;

            item.setAttribute("data-osc-origin",item.getBoundingClientRect().bottom);

            switch (item.dataset.osc) {

                    case "left":
                    item.style.transform = `translateX(${distance})`;
                    break;
                    case "right":
                    item.style.transform = `translateX(-${distance})`;
                    break;
                    case "top":
                    item.style.transform = `translateY(-${distance})`;
                    break;
                    case "bottom":
                    item.style.transform = `translateY(${distance})`;
                    break;
            }
            
        });

        this.animate();
 
    }

    this.animate = () => {

        this.components.forEach(item => {

            let transition = (item.dataset.oscTransition == undefined ) ? "transform 2s" : item.dataset.oscTransition;

            if (item.getBoundingClientRect().bottom < window.innerHeight) {

                item.style.transition = "transform "+transition;
                item.style.opacity = "1";
                item.style.transform = "translate(0,0)";
            }
           
        });
            

    }

}

/**
 * 
 * @param {document.element} elem 
 * @param {function} func 
 */
function onViewport(elem,func){

    let item = document.querySelector(elem);

    window.addEventListener('scroll',()=>{

        let point = item.getBoundingClientRect();

        if(point.bottom < window.innerHeight){
            func(item);
        }

    
    });

}


    


