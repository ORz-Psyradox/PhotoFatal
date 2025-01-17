// מקבלים את כל התמונות בגלריה
const galleryImages = document.querySelectorAll('.gallery img');

// מודל התמונה
const popupModal = document.getElementById('popupModal');
const popupImage = document.getElementById('popupImage');
const popupClose = document.getElementById('popupClose');

// הוספת מאזין לאירועים לכל תמונה בגלריה
galleryImages.forEach(image => {
    image.addEventListener('click', (event) => {
        popupImage.src = event.target.src;  // מגדירים את התמונה המוצגת במודל
        popupModal.style.display = 'flex';  // מציגים את המודל
        setTimeout(() => {
            popupModal.classList.add('show');  // מוסיפים את המחלקה 'show' אחרי זמן קצר כדי להחיל את האפקטים ב-CSS
        }, 10); // אנחנו נותנים זמן קצר כדי שהאנימציה תתחיל
    });
});

// הוספת מאזין לאירוע על כפתור הסגירה של המודל
popupClose.addEventListener('click', () => {
    popupModal.classList.remove('show');  // מסירים את המחלקה 'show' ומסתירים את המודל
    setTimeout(() => {
        popupModal.style.display = 'none';  // אחרי זמן קצר, מסתירים את המודל לגמרי
    }, 500); // אחרי 500ms (כאשר האנימציה נגמרת)
});

// סגירה אוטומטית של המודל כאשר לוחצים מחוץ לתמונה
popupModal.addEventListener('click', (event) => {
    if (event.target === popupModal) {
        popupModal.classList.remove('show');  // מסירים את המחלקה 'show' ומסתירים את המודל
        setTimeout(() => {
            popupModal.style.display = 'none';  // אחרי זמן קצר, מסתירים את המודל לגמרי
        }, 500); // אחרי 500ms (כאשר האנימציה נגמרת)
    }
});