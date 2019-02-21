export class Dog {
    public name: string;
    public bread: string;
    public story: string;
    public size: string;
    public imagePath: string;
    public vaccination: string[];

    constructor(name: string, bread: string, story: string, size: string, img: string, vacc: string[]) {
        this.name = name;
        this.bread = bread;
        this.story = story;
        this.size = size;
        this.imagePath = img;
        this.vaccination = vacc;
    }
}
