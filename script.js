document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burgerIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    burgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    const mobileLinks = document.querySelectorAll('.mobile-menu .menu');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerIcon.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});


const answer=document.getElementsByClassName('answer');
const QuestionBtn=document.getElementsByClassName('question-btn');
const ArrowBtn=document.getElementsByClassName('arrow-btn');

for(let i=0;i<QuestionBtn.length;i++){
    QuestionBtn[i].addEventListener('click',function(){
        let index = Array.from(QuestionBtn).indexOf(this);

    if (answer[index].classList.contains('active')) {
      answer[index].classList.remove('active');
      ArrowBtn[index].classList.remove('rotated');
    } 
    else {
      answer[index].classList.add('active');
      ArrowBtn[index].classList.add('rotated');
    }
    })
}







const feedbacks =[
    {
        "img":"img/aliya.png",
        "name":"Алия К",
        "star":"img/stars.png",
        "feedback":"«Очень довольна лечением у доктора Айгерим! Ребенок боялся стоматологов, но здесь ему понравилось — теперь сам просится на осмотры. Спасибо за терпение и доброту!»"
    },

     {
        "img":"img/arman.png",
        "name":"Арман Ж",
        "star":"img/stars.png",
        "feedback":"«Ставил импланты у доктора Алишера. Все прошло идеально, без боли и осложнений. Через 3 месяца уже забыл, что это не свои зубы. Рекомендую клинику!»"
    },
    {
        "img":"img/avatar3.png",
        "name":"Айдар М",
        "star":"img/stars.png",
        "feedback":"«Лучшая стоматология в городе! Ставил циркониевые коронки у доктора Алишера - результат превзошел ожидания. Безболезненно, современное оборудование, персонал внимательный.»"
    },

     {
        "img":"img/avatar4.png",
        "name":"Асель Т",
        "star":"img/star4.png",
        "feedback":"«Хороший сервис, но немного долго ждала приема. Чистку зубов сделали отлично, эмаль стала светлее на 2 тона. Доктор Айгерим объяснила все подробно. Стоимость немного выше среднего, но качество того стоит.»"
    },

     {
        "img":"img/avatar5.png",
        "name":"Дамир К",
        "star":"img/stars.png",
        "feedback":"«Ребенок боялся лечить зубы, но доктор Айгерим нашла подход - теперь ходим с удовольствием! Кариес вылечили за один визит, использовали цветную пломбу. Отдельное спасибо за подарок после приема!»"
    },
     {
        "img":"img/avatar6.png",
        "name":"Жанна С",
        "star":"img/star4.png",
        "feedback":"«Лечила пульпит. Результат хороший, но процесс занял 3 визита вместо обещанных 2. Персонал вежливый, клиника чистая. Цены соответствуют уровню, но ожидание в коридоре могло бы быть организовано комфортнее.»"
    }

]
 let currentIndex = 0;
const container1 = document.querySelector(".feedback-container1");
const container2 = document.querySelector(".feedback-container2");
const leftBtn = document.querySelector(".feedback-arrow-btn-left");
const rightBtn = document.querySelector(".feedback-arrow-btn-right");

function renderFeedback(container, data) {
    if (!container || !data) return;
    container.innerHTML = `
        <div class="upper-feedback-container">
            <div class="avatar-name">
                <div class="background-avatar"><img src="${data.img}" alt="avatar" class="avatar"></div>
                <div class="feedback-name">${data.name}</div>
            </div>
            <img src="${data.star}" alt="stars" class="stars">
        </div>
        <div class="feedback-text">${data.feedback}</div>
    `;
}

function updateFeedback() {
    if (!container1 || !container2) return;
    
    // Для десктопной версии (ширина > 1024px)
    if (window.innerWidth > 1024) {
        container2.style.display = "block";
        renderFeedback(container1, feedbacks[currentIndex]);
        // Для нечетного количества отзывов
        const nextIndex = (currentIndex + 1) % feedbacks.length;
        renderFeedback(container2, feedbacks[nextIndex]);
    } 
    // Для планшетов и телефонов
    else {
        container2.style.display = "none";
        renderFeedback(container1, feedbacks[currentIndex]);
    }
}

function moveLeft() {
    if (window.innerWidth > 1024) {
        // Для десктопа - переключаем по 1 отзыву (для обоих контейнеров)
        currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    } else {
        // Для мобильных - переключаем по 1 отзыву
        currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    }
    updateFeedback();
}

function moveRight() {
    if (window.innerWidth > 1024) {
        // Для десктопа - переключаем по 1 отзыву (для обоих контейнеров)
        currentIndex = (currentIndex + 1) % feedbacks.length;
    } else {
        // Для мобильных - переключаем по 1 отзыву
        currentIndex = (currentIndex + 1) % feedbacks.length;
    }
    updateFeedback();
}

// Назначаем обработчики событий
if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", moveLeft);
    rightBtn.addEventListener("click", moveRight);
}

// Обновляем при изменении размера окна
window.addEventListener('resize', updateFeedback);

// Инициализация при загрузке
updateFeedback();








const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const problemInput = document.getElementById("problem");
const submitBtn = document.getElementById("submitBtn");

function validatePhone(phone) {
  const regex = /^(\+7|8)\d{10}$/;
  return regex.test(phone.trim());
}

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

function validateForm() {
  const nameValid = nameInput.value.trim() !== "";
  const phoneValid = validatePhone(phoneInput.value);
  const problemValid = countWords(problemInput.value) >= 5;

  submitBtn.disabled = !(nameValid && phoneValid && problemValid);
}

openModalBtn.onclick = () => {
  modal.style.display = "flex";
};

closeModalBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

[nameInput, phoneInput, problemInput].forEach(input => {
  input.addEventListener("input", validateForm);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Форма отправлена успешно!");
  form.reset();
  submitBtn.disabled = true;
  modal.style.display = "none";
});
