let currentIndex = 0;
    
        function showSlide(index) {
            const slides = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.carousel-indicators button');
            if (index >= slides.length) currentIndex = 0;
            if (index < 0) currentIndex = slides.length - 1;
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(-${currentIndex * 100}%)`;
                indicators[i].classList.remove('active');
            });
            indicators[currentIndex].classList.add('active');
        }
    
        function nextSlide() {
            currentIndex++;
            showSlide(currentIndex);
        }
    
        function prevSlide() {
            currentIndex--;
            showSlide(currentIndex);
        }
    
        function currentSlide(index) {
            currentIndex = index;
            showSlide(currentIndex);
        }