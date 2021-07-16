// Context for the canvas for 2 dimensional operations
const ctx = canvas.getContext('2d');

export function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight * .5;
}