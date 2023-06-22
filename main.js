 var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
 var slidesCount = sliderImages.length;
 var curntSlide = 1;
 var slideNumberelement = document.getElementById('slide-number');
 var nextButton = document.getElementById('next');
 var prevButton = document.getElementById('prev');


 nextButton.onclick = nextSlide;
 prevButton.onclick = prevSlide;

 var pagintaionelement = document.createElement('ul');
 pagintaionelement.setAttribute('id', 'pagintion-ul');

 for (var i = 1; i <= slidesCount; i++) {
     var pagintaionItem = document.createElement('li');
     pagintaionItem.setAttribute('data-index', i);
     pagintaionItem.appendChild(document.createTextNode(i));
     pagintaionelement.appendChild(pagintaionItem);
 }
 document.getElementById('indcator').appendChild(pagintaionelement);
 var pagintionCreatedUl = document.getElementById('pagintion-ul');

 var pagintaionsBullts = Array.from(document.querySelectorAll('#pagintion-ul li'));

 for (var i = 0; i < pagintaionsBullts.length; i++) {

     pagintaionsBullts[i].onclick = function() {

         curntSlide = parseInt(this.getAttribute('data-index'));
         theChecker();
     }
 }


 theChecker();

 function nextSlide() {
     if (nextButton.classList.contains('disabled')) {

         return false;
     } else {
         curntSlide++;
         theChecker();
     }
 }

 function prevSlide() {
     if (prevButton.classList.contains('disabled')) {

         return false;
     } else {
         curntSlide--;
         theChecker();
     }

 }



 function theChecker() {
     slideNumberelement.textContent = 'img :' + (curntSlide) + ' of ' + (slidesCount);

     removeAllActive();



     sliderImages[curntSlide - 1].classList.add('active');
     pagintionCreatedUl.children[curntSlide - 1].classList.add('active');

     if (curntSlide == 1) {
         prevButton.classList.add('disabled');
     } else {
         prevButton.classList.remove('disabled');
     }


     if (curntSlide == slidesCount) {
         nextButton.classList.add('disabled');
     } else {
         nextButton.classList.remove('disabled');
     }



 }


 function removeAllActive() {
     sliderImages.forEach(function(img) {
         img.classList.remove('active');
     });


     pagintaionsBullts.forEach(function(bull) {

         bull.classList.remove('active')
     });
 }