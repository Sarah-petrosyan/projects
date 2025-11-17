const lang=[
    {id:1, name: 'English', code:'en'},
    {id:2, name: 'Armenian', code:'am'},
    {id:3, name: 'Russian', code:'ru'},
]

let otherWord={
    am:{
        more: 'Դիտել նախագիծը'
    },
    ru:{
        more:'Посмотреть проект'
    },
    en:{
        more: 'View Project'
    }
}

let activeLang='en'
if(localStorage.getItem("lang")){
    activeLang=localStorage.getItem("lang")
}

const i18n = {
    am: {
        "hero.name": "Սառա Պետրոսյան",
        "hero.role": "Ֆրոնտենդ Դևելոփեր",
        "hero.tag1": "JavaScript",
        "hero.tag2": "HTML և CSS",
        "hero.tag3": "WebStorm",
        "hero.tag4": "Ֆրոնտ-Էնդ",
        "hero.email": "Էլ. հասցե",
        "hero.phone": "Հեռախոս",
        "hero.linkedin": "GitHub",
        "about.title": "Ինձ Մասին",
        "about.text": "Ես շատ ոգևորված և նվիրված անձ եմ, ով սիրում է այն, ինչ անում է։ Ես նպատակասլաց եմ, խելացի, և սիրում եմ խնդիրներ լուծել և ավարտել մարտահրավերային առաջադրանքներ։ Ես միշտ պատրաստ եմ սովորել և զարգանալ, և ներկայումս կենտրոնացած եմ իմ հմտությունների զարգացմամբ ֆրոնտ-էնդ դևելոփմենթի մեջ՝ ստեղծելու ստեղծարար և օգտակար վեբ փորձառություններ։",
        "skills.title": "Հիմնական հմտություններ",
        "exp.title": "Փորձառություն",
        "proj.title": "Ընտրված նախագծեր",
        "proj.all": "Բոլորը դիտել",
        "edu.title": "Կրթություն",
        "cert.title": "Սերտիֆիկատներ",
        "footer.copy": "© 2025 Danisoft Academy — Ռեզյումե Դեմո"
    },
    en: {
        "hero.name": "Sarah Petrosyan",
        "hero.role": "Frontend Developer",
        "hero.tag1": "JavaScript",
        "hero.tag2": "HTML & CSS",
        "hero.tag3": "WebStorm",
        "hero.tag4": "Front-End",
        "hero.email": "Email",
        "hero.phone": "Phone",
        "hero.linkedin": "GitHub",
        "about.title": "About Me",
        "about.text": "I am a very enthusiastic and dedicated person who loves what I do. I’m goal-driven, smart, and enjoy solving problems and completing challenging tasks. I’m always eager to learn and grow, and I’m currently focused on developing my skills in front-end development to create creative and user-friendly web experiences.",
        "skills.title": "Key Skills",
        "exp.title": "Experience",
        "proj.title": "Selected Projects",
        "proj.all": "View All",
        "edu.title": "Education",
        "cert.title": "Certificates",
        "footer.copy": "© 2025 Danisoft Academy — Resume Demo"
    },
    ru: {
        "hero.name": "Сара Петросян",
        "hero.role": "Frontend Разработчик",
        "hero.tag1": "JavaScript",
        "hero.tag2": "HTML и CSS",
        "hero.tag3": "WebStorm",
        "hero.tag4": "Фронт-Энд",
        "hero.email": "Эл. почта",
        "hero.phone": "Телефон",
        "hero.linkedin": "GitHub",
        "about.title": "Обо Мне",
        "about.text": "Я очень энтузиастичный и преданный своему делу человек, который любит то, что делает. Я целеустремленный, умный и люблю решать задачи и выполнять сложные задания. Я всегда стремлюсь учиться и развиваться, и в настоящее время сосредоточен на развитии навыков фронтенд-разработки для создания креативных и удобных веб-решений.",
        "skills.title": "Ключевые навыки",
        "exp.title": "Опыт",
        "proj.title": "Выбранные проекты",
        "proj.all": "Смотреть все",
        "edu.title": "Образование",
        "cert.title": "Сертификаты",
        "footer.copy": "© 2025 Danisoft Academy — Демо Резюме"
    }
};

let experience = {
    am: [
        {
            icon: '💻',
            title: 'Frontend Դևելոփմենթ — Անձնական Նախագծեր (2024 — 2025)',
            text: 'Պատասխանական ինտերֆեյսներ և JavaScript, HTML, CSS հիմնականներ։'
        }
    ],
    en: [
        {
            icon: '💻',
            title: 'Frontend Developer — Personal Projects & Learning (2024 — 2025)',
            text: 'Built responsive front-end interfaces and practiced JavaScript, HTML, and CSS fundamentals at Danisoft Academy.'
        }
    ],
    ru: [
        {
            icon: '💻',
            title: 'Frontend Разработчик — Личные Проекты (2024 — 2025)',
            text: 'Создавал адаптивные интерфейсы и практиковал основы JavaScript, HTML и CSS в Danisoft Academy.'
        }
    ]
};

const projects = [
    {
        id: 1,
        img: 'assets/images/counter.jpeg',
        to: "pages/Counter/index.html",
        am: { title: "Հաշվիչ", desc: "Պարզ հաշվում է թվերը" },
        en: { title: "Counter", desc: "Simple number counter" },
        ru: { title: "Счётчик", desc: "Простой счёт чисел" }
    },
    {
        id: 2,
        img: 'assets/images/todo.jpeg',
        to: "pages/Todo/index.html",
        am: { title: "Տնային առաջադրանք", desc: "Արագ գրանցեք առաջադրանքները" },
        en: { title: "Todo", desc: "Quickly track your tasks" },
        ru: { title: "Задачи", desc: "Быстро отслеживайте задачи" }
    },
    {
        id: 3,
        img: 'assets/images/weather.jpeg',
        to: "pages/Weather/index.html",
        am: { title: "Եղանակ", desc: "Տեսեք ներկայիս եղանակը" },
        en: { title: "Weather", desc: "Check current weather" },
        ru: { title: "Погода", desc: "Смотрите текущую погоду" }
    },
    {
        id: 4,
        img: 'assets/images/traffic-lights.jpeg',
        to: "pages/TrafficLights/index.html",
        am: { title: "Փոխադրահոսքի լույսեր", desc: "Կանխատեսեք լույսի փոփոխությունները" },
        en: { title: "Traffic Lights", desc: "Simulate traffic light changes" },
        ru: { title: "Светофоры", desc: "Симуляция смены светофора" }
    },
    {
        id: 5,
        img: 'assets/images/word-scramble.jpeg',
        to: "pages/WordScramble/index.html",
        am: { title: "Բառերի խառնուրդ", desc: "Գտեք ճիշտ բառերը" },
        en: { title: "Word Scramble", desc: "Find the correct words" },
        ru: { title: "Смешанные слова", desc: "Найдите правильные слова" }
    },
    {
        id: 6,
        img: 'assets/images/x-o.jpeg',
        to: "pages/XO/index.html",
        am: { title: "X/O խաղ", desc: "Խաղացեք X և O խաղը" },
        en: { title: "X/O Game", desc: "Play the X and O game" },
        ru: { title: "Игра X/O", desc: "Играйте в X и O" }
    },{
        id: 7,
        img: 'assets/images/barev.jpg',
        to: "pages/barev/index.html",
        am: { title: "Barev", desc: "Խաղացեք X և O խաղը" },
        en: { title: "barev", desc: "Play the X and O game" },
        ru: { title: "barev", desc: "Играйте в X и O" }
    },
    {
        id: 8,
        img: 'assets/images/millioner.jpg',
        to: "pages/Millioner/index.html",
        am: { title: "Միլիոնատեր", desc: "Պատասխանեք հարցերին և հաղթեք" },
        en: { title: "Millionaire", desc: "Answer questions and win" },
        ru: { title: "Миллионер", desc: "Отвечайте на вопросы и выигрывайте" }
    },
    {
        id: 9,
        img: 'assets/images/bigtodo.jpeg',
        to: "pages/BigTodo/index.html",
        am: { title: "Մեծ Տնային", desc: "Կառավարեք բոլոր առաջադրանքները մեկ տեղում" },
        en: { title: "Big Todo", desc: "Manage all tasks in one place" },
        ru: { title: "Большой Todo", desc: "Управляйте всеми задачами в одном месте" }
    }
];




let projects_old = {
    am: [
        {
            img: 'assets/images/counter.jpeg',
            title: 'Անհատական Ֆրոնտ-Էնդ Նախագծեր',
            text: 'Դասավորություններ, կատեգորիաներ/լեզուներ, սիդինգ և անալիտիկա։'
        },
        {
            img: 'https://picsum.photos/seed/proj2/640/360',
            title: 'AI-Օգնությամբ React Lern Notebook',
            text: 'Պրոմպտներ, օրինաչափություններ և առաջադրանքներ արդյունավետ նախագծերի համար։'
        },
        {
            img: 'https://picsum.photos/seed/proj3/640/360',
            title: 'E-commerce UI Kit (Bootstrap)',
            text: 'Պատասխանական կոմպոնենտներ, պրոդուկտ քարտեր, ֆիլտրեր և զամբյուղ։'
        }
    ],
    en: [
        {
            img: 'https://picsum.photos/seed/proj1/640/360',
            title: 'Personal Front-End Projects',
            text: 'Role-based dashboards, categories/languages, seeding & analytics.'
        },
        {
            img: 'https://picsum.photos/seed/proj2/640/360',
            title: 'AI-Assisted React Learning Notebook',
            text: 'Prompts, patterns, and tasks for efficient project building.'
        },
        {
            img: 'https://picsum.photos/seed/proj3/640/360',
            title: 'E-commerce UI Kit (Bootstrap)',
            text: 'Responsive components, product cards, filters and cart.'
        }
    ],
    ru: [
        {
            img: 'https://picsum.photos/seed/proj1/640/360',
            title: 'Личные Фронт-Энд Проекты',
            text: 'Ролевые панели, категории/языки, посев и аналитика.'
        },
        {
            img: 'https://picsum.photos/seed/proj2/640/360',
            title: 'AI-ассистированный React Notebook',
            text: 'Подсказки, шаблоны и задания для эффективного построения проектов.'
        },
        {
            img: 'https://picsum.photos/seed/proj3/640/360',
            title: 'E-commerce UI Kit (Bootstrap)',
            text: 'Адаптивные компоненты, карточки продуктов, фильтры и корзина.'
        }
    ]
};

let education = {
    am: [
        'Certificate in Coding — Front-End Developer · Danisoft Academy · 1 տարի · Առցանց',
        'Լեզուներ՝ Անգլերեն (հմուտ — հիմնական), Հայերեն (հմուտ)'
    ],
    en: [
        'Certificate in Coding — Front-End Developer · Danisoft Academy · 1 year · Online',
        'Languages: English (fluent — main), Armenian (fluent)'
    ],
    ru: [
        'Certificate in Coding — Front-End Developer · Danisoft Academy · 1 год · Онлайн',
        'Языки: Английский (свободно — основной), Армянский (свободно)'
    ]
};

let certificates = {
    am: [
        'Կոդավորման վկայական — Front-End Developer · Danisoft Academy · 1 տարի',
    ],
    en: [
        'Certificate in Coding — Front-End Developer · Danisoft Academy · 1 year',
    ],
    ru: [
        'Сертификат по программированию — Front-End Developer · Danisoft Academy · 1 год',
    ]
};
const keySkills = {
    en: [
        'JavaScript', 'HTML', 'CSS', 'React', 'WebStorm'
    ],
    am: [
        'JavaScript', 'HTML', 'CSS', 'React', 'WebStorm'
    ],
    ru: [
        'JavaScript', 'HTML', 'CSS', 'React', 'WebStorm'
    ]
};

const langSelectEl = document.querySelector('#langSelect')

const aboutTitleEl = document.querySelector('[data-i18n="about.title"]')
const aboutEl = document.querySelector('[data-i18n="about.text"]')

const skillsEl = document.querySelector('#skills')

const experienceEl = document.querySelector('#experience')
const projectsEl = document.querySelector('#projects')

const educationEl = document.querySelector('#education')
const certsEl = document.querySelector('#certs')

const footerEl = document.querySelector('[data-i18n="footer.copy"]')

const heroNameEl = document.querySelector('[data-i18n="hero.name"]')
const heroRoleEl = document.querySelector('[data-i18n="hero.role"]')

const heroEmailEl = document.querySelector('[data-i18n="hero.email"]')
const heroPhoneEl = document.querySelector('[data-i18n="hero.phone"]')
const heroLinkedInEl = document.querySelector('[data-i18n="hero.linkedin"]')



lang.forEach(l => {
    langSelectEl.innerHTML += `<option value="${l.code}">${l.name}</option>`
})
langSelectEl.value = activeLang


function updateHero() {
    heroNameEl.innerHTML = i18n[activeLang]["hero.name"]
    heroRoleEl.innerHTML = i18n[activeLang]["hero.role"]
    heroEmailEl.innerHTML = i18n[activeLang]["hero.email"]
    heroPhoneEl.innerHTML = i18n[activeLang]["hero.phone"]

    const tagsElems=document.querySelectorAll('.tag')
    tagsElems.forEach((el,index)=>{
        el.innerHTML=i18n[activeLang]["hero.tag"+(index+1)]
    })
}

function updateAboutSkills() {
    aboutTitleEl.innerHTML = i18n[activeLang]["about.title"]
    aboutEl.innerHTML = i18n[activeLang]["about.text"]
    skillsEl.innerHTML = ''
    keySkills[activeLang].forEach(skill => {
        skillsEl.innerHTML += `<span class="tag">${skill}</span>`
    })
}

function updateExperience() {
    experienceEl.innerHTML = ''
    experience[activeLang].forEach(exp => {
        experienceEl.innerHTML += `
        <div class="position-relative ps-4 pb-3">
            <div class="t-dot">${exp.icon}</div>
            <div class="fw-semibold">${exp.title}</div>
            <div class="text-muted">${exp.text}</div>
        </div>`
    })
}

function updateProjects() {
    projectsEl.innerHTML = ''
    projects.forEach(proj => {
        projectsEl.innerHTML += `
        <div class="col-md-4">
            <div class="item-card h-100">
                <img src="${proj.img}" alt="" class="w-100 rounded-2xl mb-3" style="aspect-ratio:16/9; object-fit:cover;">
                <h5>${proj[activeLang].title}</h5>
                <p class="text-muted">${proj[activeLang].desc}</p>
                <a href="${proj.to}" target="_blank" class="btn btn-primary btn-sm">${otherWord[activeLang].more}</a>
            </div>
        </div>`
    })
}

function updateEducation() {
    educationEl.innerHTML = ''
    education[activeLang].forEach(item => {
        educationEl.innerHTML += `<li class="mb-2">${item}</li>`
    })
}

function updateCertificates() {
    certsEl.innerHTML = ''
    certificates[activeLang].forEach(item => {
        certsEl.innerHTML += `<li class="mb-2">${item}</li>`
    })
}

function updateFooter() {
    footerEl.innerHTML = i18n[activeLang]["footer.copy"];
}

updateHero()
updateAboutSkills()
updateExperience()
updateProjects()
updateEducation()
updateCertificates()
updateFooter()


langSelectEl.onchange = function() {
    activeLang = langSelectEl.value
    localStorage.setItem("lang", activeLang)

    updateHero()
    updateAboutSkills()
    updateExperience()
    updateProjects()
    updateEducation()
    updateCertificates()
    updateFooter()
}


