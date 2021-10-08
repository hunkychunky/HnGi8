//jshint esversion: 6

// smooth scroll
$(document).ready(()=>{
    $(".navbar .nav-link").on('click', (event)=> {

        if (this.hash !== "") {            

            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, ()=>{
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(()=>{
    $(this).toggleClass('is-active');
    $('ul.nav').toggleClass('show');
});

let logo = document.getElementById('logo');
logo.style.color = 'rgb(31, 30, 30)';

//break
/*
let arr = [1,2,3,4,5,6];
let [three,four,...others] = arr;
console.log(three,four,...others);

class person{
    constructor(name, age){
        console.log('From the constructor');
        this.name = name;
        this.age = age;
        }
    diplayname (name){
        this.name = name;
        console.log(`Your name is ${this.name}`);
    }
}

class student extends person{
    constructor (name, age, career){
        super(name, age);
        this.career = career;
        console.log('From student');
    }
}
 let student1 = new student('Ahmad',19, 'computer science');

 console.log(student1);
console.dir(student1);
*/