export class Dog {
    public name: string;
    public bread: string;
    public personality: string;
    public size: string;
    public vaccination: string[];

    constructor(name: string, bread: string, pers: string, size: string, vacc: string[]) {
        this.name = name;
        this.bread = bread;
        this.personality = pers;
        this.size = size;
        this.vaccination = vacc;
    }
}
