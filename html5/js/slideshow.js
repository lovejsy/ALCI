$(function () {

	var slides = $('.slideshow img'),
	slideCount = slides.length,
	currentIndex = 0;

 slides.eq(currentIndex).fadeIn()

  
var timer = setInterval(showNextSlide, 100);
 
   function showNextSlide(){

      var nextIndex = (currentIndex +1) % slideCount;

      slides.eq(currentIndex).fadeOut();
      slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;

      console.log(currentIndex);

}

slides.mouseover(function(){
   clearInterval(timer);
})
.mouseout(function(){
	setInterval(showNextSlide, 100);
})

});