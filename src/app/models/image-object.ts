export class ImageObject {
    index: number;
    src: string;
    alt: string;
    title: string;

    constructor(index: number, src: string, alt: string, title: string) {
        this.index = index;
        this.src = src;
        this.alt = alt;
        this.title = title;
    }
}
