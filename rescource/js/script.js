//************************use for all elements************************
const AllAnimate = (className) => {
    //in index we give """animate""" class to element That we need to be animated
    //get all class contain """animate"""
    const anims = document.querySelectorAll(className);
    //item: The item on the list of anims
    //index: the index of item on the list of anims 
    anims.forEach((item, index) => {
        //we can use from index to animate our elements ,here i animate odd and even Separately ,you can change index condition
        if (index % 2 === 0) {
            //The window event below is to check when page scroll
            window.addEventListener('scroll', () => {
                //window.pageYOffset: is top of page we can view on scroll
                //item.offsetTop: is top of element we can view on scroll
                if (window.pageYOffset >= item.offsetTop - 700 && window.pageYOffset <= item.offsetTop - 600) {
                    item.classList.add('animate__animated');
                    //you can change animate class in below with visit https://animate.style/ website
                    item.classList.add('animate__rollIn');
                }
            });
        } else {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset >= item.offsetTop - 700 && window.pageYOffset <= item.offsetTop - 600) {
                    item.classList.add('animate__animated');
                    //you can change animate class in below with visit https://animate.style/ website
                    item.classList.add('animate__hinge');
                }
            });
        }
    });
}

//************************use for specific element************************

const SpecificAnimate = (className) => {
    //in index we give """animate""" class to element That we need to be animated
    //get class contain """animate"""
    const anim = document.querySelector(className);
    //The window event below is to check when page scroll
    window.addEventListener('scroll', () => {
        //window.pageYOffset: is top of page we can view on scroll
        //item.offsetTop: is top of element we can view on scroll
        if (window.pageYOffset >= anim.offsetTop - 700 && window.pageYOffset <= anim.offsetTop - 600) {
            anim.classList.add('animate__animated');
            //you can change animate class in below with visit https://animate.style/ website
            anim.classList.add('animate__hinge');
        }
    });
}

//*******************************use*****************************************
SpecificAnimate('.animate');