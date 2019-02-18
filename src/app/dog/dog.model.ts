export class Dog {
    public name: string;
    public bread: string;
    public personality: string;
    public size: string;
    public imagePath: string;
    public vaccination: string[];

    constructor(name: string, bread: string, pers: string, size: string, img: string, vacc: string[]) {
        this.name = name;
        this.bread = bread;
        this.personality = pers;
        this.size = size;
        this.imagePath = img;
        this.vaccination = vacc;
    }
}
