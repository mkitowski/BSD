class Position {
    constructor(element, link) {
        this.element = element;
        this.link = link;
        this.start();
    }
    start() {
        this.link.addEventListener('click',() => {
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': this.element.offsetTop-96
            })
        });
    }
}

export {Position};