
let randomNum = Math.floor((Math.random() * 10) + 1);
console.log(randomNum);

// export let pageSound = `new Audio('audio/pageflip${randomNum}.wav')`;

export let pageSound = new Audio(`audio/pageflip${randomNum}.wav`);

