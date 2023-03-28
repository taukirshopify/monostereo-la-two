class CircleBlock extends HTMLElement {
    constructor() {
        super();

        let radius = 180;
        if( window.innerWidth < 768 ){
            radius = 360;
        }

        new CircleType(this.querySelector('.circle-text'))
        .dir(-1)
        .radius( radius );
    }
}
customElements.define('circle-block', CircleBlock);
