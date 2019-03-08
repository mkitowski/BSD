class Position {
    constructor(element) {
        this.element = element;
        this.start();
    }
    start() {
        document.querySelector('#start').addEventListener('click',() => {
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': this.element.offsetTop-96
            })
        });
    }
}

export {Position};