const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const fulls = document.querySelector('.body_full');
const sections = document.querySelectorAll('.body_full > section');
const mouseWheel = document.querySelector('.mouse_icon > a');
const projectNow = document.querySelector('#main .now');
const about = document.querySelector('#about');

const panel = document.querySelector('.panelIcon');
const gnb = document.querySelector('.header .gnb');
let menus = document.querySelectorAll('.header .gnb a');
const marker = document.querySelector('.header .marker');
const momarker = document.querySelectorAll('.header .main_nav::after');
const closeBtn = document.querySelectorAll('.close_btn');
const modals = document.querySelectorAll('.modal');
const cards = document.querySelectorAll('.card');



let posi = [];
let index = 0;
let num = posi.length;
let win_w = window.innerWidth;

//gnb

//각 섹션의 위치값 구하여 배열에 담는 함수
function pos_offset(){
    posi = [];
    sections.forEach((e) => {
        if(win_w > 768){
            posi.push(window.scrollY + e.getBoundingClientRect().top - 100);
        }else{
            posi.push(window.scrollY + e.getBoundingClientRect().top);
        }
    })
    posi[0] = 0;
}
pos_offset();

//처음에는 main 화면 실행으로 gnb 활성화
menus[0].classList.add('active');
markerbar(menus[0]);

//각 메뉴 클릭시 해당 섹션으로 이동 및 gnb 활성화
menus.forEach((menu, i)=>{
    menu.addEventListener('click', (e)=>{
        e.preventDefault();
        menus.forEach((e)=>{
            e.classList.remove('active');
        })
        menu.classList.add('active');
        window.scrollTo({
            top: posi[i],
            behavior: 'smooth'
        });
        markerbar(menu);
        if(gnb.classList.contains('active')){
            panel.classList.remove('active');
            gnb.classList.remove('active');
        }
    })
})

//gnb의 marker width와 위치 구하는 함수
function markerbar(e) {
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}

//스크롤 했을 떄 markerbar가 따라다니는 함수
function indicator(){
    let current="";
    
    sections.forEach((section, i) => {
        if(window.scrollY >= posi[i] - 400) {
            current = section.getAttribute('id');
        }
    })
    menus.forEach((menu)=>{
        if(menus[1].classList.contains('active')){
            about.classList.add('active');
        }else{
            about.classList.remove('active');
        }
        const href = menu.getAttribute('href').substring(1);
        if(href === current){
            menus.forEach((e)=>{
                e.classList.remove('active');
            })
            menu.classList.add('active');
            markerbar(menu);
        }
        
    })
};
//window창이 768미만일 때 panel 기능
panel.addEventListener('click',function(e){
    e.preventDefault();
    this.classList.toggle('active');
    gnb.classList.toggle('active');
    
});


//#main
//main의 마우스 아이콘
mouseWheel.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({
        top: posi[1],
        behavior: 'smooth'
    });
});

//main의 project 바로가기 버튼
projectNow.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({
        top: posi[2],
        behavior: 'smooth'
    });
});

//#about 
//이름 효과
let intSpan = document.querySelectorAll('#about .introduce h3 span');

intSpan.forEach((e,index)=>{
    e.style.transitionDelay = ((index + 1) * 0.3) + 's'; 
})

//#project 
//각 card의 모달창을 여는 이벤트

function Modal(){
    if(win_w > 1200){
        cards.forEach((card, i)=>{
            card.addEventListener('click',function(){
                modals[i].style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        

        //각 card의 모달창을 닫는 이벤트
        modals.forEach((modal, i)=>{
            closeBtn[i].addEventListener('click',function(){
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
    }else{
        modals.forEach((modal)=>{
            modal.style.display = 'none';
        });
    }
};
Modal();


//윈도우 scroll 이벤트
window.addEventListener('scroll', () => {
    indicator();
});

//윈도우 resize 이벤트
window.addEventListener('resize',function(){
    win_w = window.innerWidth;
    indicator();
    pos_offset();
    Modal();

});