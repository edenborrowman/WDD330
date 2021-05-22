var background = [
    {name: 'img0', image: 'images/sm_res_0.jpg'},
    {name: 'img1', image: 'images/sm_res_1.jpg'},
    {name: 'img1', image: 'images/sm_res_2.jpg'},
    {name: 'img1', image: 'images/sm_res_3.jpg'},
    {name: 'img1', image: 'images/sm_res_4.jpg'},
    {name: 'img1', image: 'images/sm_res_5.jpg'},
    {name: 'img1', image: 'images/sm_res_6.jpg'},
    {name: 'img1', image: 'images/sm_res_7.jpg'},
    {name: 'img1', image: 'images/sm_res_8.jpg'},
    {name: 'img1', image: 'images/sm_res_9.jpg'},
];


var random_pic = (background[Math.floor(Math.random()*10)].image)
console.log(random_pic);

document.querySelector('#back_pic').src = random_pic;



