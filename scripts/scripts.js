let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;
let autoSlideInterval; // משתנה לשמירת ה-interval של המעבר האוטומטי

// פונקציה להציג תמונה לפי אינדקס
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // מחזירים לתמונה הראשונה אם הגענו לסוף
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // אם הגענו לתמונה הראשונה, נעבור לאחרונה
    } else {
        currentSlide = index;
    }
    // מחליף את התמונה לפי האינדקס
    document.querySelector(".carousel-container").style.transform = `translateX(-${currentSlide * 100}%)`;
}

// פונקציה להזיז את התמונה לפי צעד
function moveSlide(step) {
    showSlide(currentSlide + step);
    resetAutoSlide(); // כל לחיצה על חץ תעצור ותחדש את המעבר האוטומטי
}

// הצגת התמונה הראשונה
showSlide(currentSlide);

// החלפת תמונות אוטומטית כל 3 שניות
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1); // העברת התמונה קדימה כל 3 שניות
    }, 5000);
}

// עצירת המעבר האוטומטי
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // עצירת המעבר האוטומטי
    startAutoSlide(); // אתחול מחדש של המעבר האוטומטי
}

// התחלת המעבר האוטומטי בעת טעינת הדף
startAutoSlide();

// חץ ימני (הבא)
document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1); // העברת תמונה קדימה
});

// חץ שמאלי (הקודם)
document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1); // העברת תמונה אחורה
});
