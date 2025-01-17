document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalImages = images.length;
    let autoSlideInterval;

    // פונקציה להעברת תמונה
    function changeImage(index) {
        if (index >= totalImages) {
            currentIndex = 0; // מחזירים לתמונה הראשונה אם הגענו לסוף
        } else if (index < 0) {
            currentIndex = totalImages - 1; // אם הגענו לתמונה הראשונה, נעבור לאחרונה
        } else {
            currentIndex = index;
        }

        // מעביר את התמונות לפי האינדקס
        const newTransformValue = -currentIndex * 100 + '%';
        document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue})`;
    }

    // חץ ימני (הבא)
    nextButton.addEventListener('click', function() {
        changeImage(currentIndex + 1); // העברת תמונה קדימה
        resetAutoSlide(); // עצור את המעבר האוטומטי, וחדש אותו
    });

    // חץ שמאלי (הקודם)
    prevButton.addEventListener('click', function() {
        changeImage(currentIndex - 1); // העברת תמונה אחורה
        resetAutoSlide(); // עצור את המעבר האוטומטי, וחדש אותו
    });

    // החלפת תמונות אוטומטית כל 5 שניות
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            changeImage(currentIndex + 1); // מעבר אוטומטי קדימה
        }, 5000); // 5000 מילישניות = 5 שניות
    }

    // עצירת המעבר האוטומטי
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // עצור את המעבר האוטומטי
        startAutoSlide(); // התחל מחדש את המעבר האוטומטי
    }

    // הפעלת המעבר האוטומטי ברקע
    startAutoSlide();

    // התחל עם התמונה הראשונה
    changeImage(currentIndex);
});