function hasSomeParentTheClass(element, classname) {
    if (element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}

Reveal.addEventListener( 'slidechanged', function( event ) {    

    if ((event.currentSlide.querySelector('img') != null) &&  (hasSomeParentTheClass(event.currentSlide.querySelector('img'),"ori"))) {
        document.body.style.backgroundImage =  "url('" + event.currentSlide.querySelector('img').src + "')";   
    } else
    {
        document.body.style.backgroundImage = "url('" + "./images/bg.jpg" + "')";   
    }
} 
);
