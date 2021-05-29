var motiv_info = [
    {
        name: 'img0',
        image: 'images/bee_1_1200.jpg',
        image2: 'images/bee_1_800.jpg',
        image3: 'images/bee_1_400.jpg',
        alt: 'serene picture',
        quote: '“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_12_1200.jpg',
        image2: 'images/bee_12_800.jpg',
        image3: 'images/bee_12_400.jpg',
        alt: 'serene picture',
        quote: "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_3_1200.jpg',
        image2: 'images/bee_3_800.jpg',
        image3: 'images/bee_3_400.jpg',
        alt: 'serene picture',
        quote: "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_4_1200.jpg',
        image2: 'images/bee_4_800.jpg',
        image3: 'images/bee_4_400.jpg',
        alt: 'serene picture',
        quote: "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_11_1200.jpg',
        image2: 'images/bee_11_800.jpg',
        image3: 'images/bee_11_400.jpg',
        alt: 'serene picture',
        quote: "“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_6_1200.jpg',
        image2: 'images/bee_6_800.jpg',
        image3: 'images/bee_6_400.jpg',
        alt: 'serene picture',
        quote: "“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_7_1200.jpg',
        image2: 'images/bee_7_800.jpg',
        image3: 'images/bee_7_400.jpg',
        alt: 'serene picture',
        quote: "“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_8_1200.jpg',
        image2: 'images/bee_8_800.jpg',
        image3: 'images/bee_8_400.jpg',
        alt: 'serene picture',
        quote: "“We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_9_1200.jpg',
        image2: 'images/bee_9_800.jpg',
        image3: 'images/bee_9_400.jpg',
        alt: 'serene picture',
        quote: "“What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.” – Don Zimmer",
        class: "q_text"
    },
    {
        name: 'img1',
        image: 'images/bee_10_1200.jpg',
        image2: 'images/bee_10_800.jpg',
        image3: 'images/bee_10_400.jpg',
        alt: 'serene picture',
        quote: "“You Are Never Too Old To Set Another Goal Or To Dream A New Dream.” – C.S. Lewis",
        class: "q_text"
    }
];

var randomNum = Math.floor(Math.random()*10)

var random_quote_pic = motiv_info[randomNum].image;
var sm_quote_pic = motiv_info[randomNum].image3;
var md_quote_pic = motiv_info[randomNum].image2;
var random_quote = motiv_info[randomNum].quote;


document.querySelector('#qt').textContent = random_quote;

document.querySelector('#src1').srcset = sm_quote_pic;
document.querySelector('#src2').srcset = md_quote_pic;
document.querySelector('#src3').srcset = random_quote_pic;
document.querySelector('#quote_pic').src = random_quote_pic;


function refreshThePage() {
    location = location;
}