var motiv_info = [
    {
        name: 'img0',
        image: 'images/motiv_1_1200.jpg',
        image2: 'images/motiv_1_800.jpg',
        image3: 'images/motiv_1_400.jpg',
        alt: 'serene picture',
        quote: '“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_2_1200.jpg',
        image2: 'images/motiv_2_800.jpg',
        image3: 'images/motiv_2_400.jpg',
        alt: 'serene picture',
        quote: "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_3_1200.jpg',
        image2: 'images/motiv_3_800.jpg',
        image3: 'images/motiv_3_400.jpg',
        alt: 'serene picture',
        quote: "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_4_1200.jpg',
        image2: 'images/motiv_4_800.jpg',
        image3: 'images/motiv_4_400.jpg',
        alt: 'serene picture',
        quote: "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_5_1200.jpg',
        image2: 'images/motiv_5_800.jpg',
        image3: 'images/motiv_5_400.jpg',
        alt: 'serene picture',
        quote: "“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_6_1200.jpg',
        image: 'images/motiv_6_1200.jpg',
        image2: 'images/motiv_6_800.jpg',
        image3: 'images/motiv_6_400.jpg',
        alt: 'serene picture',
        quote: "“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_7_1200.jpg',
        image2: 'images/motiv_7_800.jpg',
        image3: 'images/motiv_7_400.jpg',
        alt: 'serene picture',
        quote: "“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_8_1200.jpg',
        image2: 'images/motiv_8_800.jpg',
        image3: 'images/motiv_8_400.jpg',
        alt: 'serene picture',
        quote: "“We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_9_1200.jpg',
        image2: 'images/motiv_9_800.jpg',
        image3: 'images/motiv_9_400.jpg',
        alt: 'serene picture',
        quote: "“What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.” – Don Zimmer",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/motiv_10_1200.jpg',
        image2: 'images/motiv_10_800.jpg',
        image3: 'images/motiv_10_400.jpg',
        alt: 'serene picture',
        quote: "“You Are Never Too Old To Set Another Goal Or To Dream A New Dream.” – C.S. Lewis",
        class: "q_text"
    }
];

var random_quote_pic = motiv_info[Math.floor(Math.random()*10)].image;
var sm_quote_pic = motiv_info[Math.floor(Math.random()*10)].image2;
var md_quote_pic = motiv_info[Math.floor(Math.random()*10)].image3;
var random_quote = motiv_info[Math.floor(Math.random()*10)].quote;


document.querySelector('#quote').innerHTML = random_quote;

document.querySelector('#src1').srcset.innerHTML = sm_quote_pic;
document.querySelector('#src2').srcset.innerHTML = md_quote_pic;
document.querySelector('#src3').srcset.innerHTML = random_quote_pic;
document.querySelector('#quote_pic').src = random_quote_pic;

console.log(motiv_info[0].image2);
console.log(sm_quote_pic);

