// 1️⃣ تهيئة ScrollReveal
const sr = ScrollReveal({
    distance: '0px',
    duration: 0,
    reset: false
});

// 2️⃣ Navbar
sr.reveal('.navbar', {
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});

// 3️⃣ Home Image
sr.reveal('#home img', {
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});

// 4️⃣ Skills Section
sr.reveal('.skill', {
    interval: 200,
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});

// 5️⃣ Projects Section
sr.reveal('.project', {
    interval: 200,
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});

// 6️⃣ About Section
sr.reveal('.about img', {
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});

sr.reveal('.about h2', {
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});

// 7️⃣ Contact Section
sr.reveal('#contact fieldset', {
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});

sr.reveal('#contact h2', {
    afterReveal: function(el) {
        el.classList.add('start-animation');
    }
});
