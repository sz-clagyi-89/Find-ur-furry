import { Dog } from './dog.model';

export class DogService {
    private dogs: Dog[] = [
        new Dog(
            'Nina',
            'Daschund mix',
            'Cheeky',
            'Small',
            'https://media.defense.gov/2012/Oct/24/2000103190/780/780/0/121022-F-PM370-008.JPG',
            [ 'parvo', 'hydrophobia' ]
        ),
        new Dog(
            'Roxy',
            'Daschund mix',
            'playfull',
            'Small',
            'https://get.pxhere.com/photo/dog-fire-mammal-black-hound-domestic-animal-vertebrate-dog-breed-dachshund-guard-dog-small-dog-dog-like-mammal-carnivoran-dobermann-austrian-black-and-tan-hound-polish-hunting-dog-transylvanian-hound-black-and-tan-coonhound-1384458.jpg',
            [ 'parvo', 'hydrophobia', 'vermifuge' ]
        ),
        new Dog(
            'Moncsi',
            'Poodle',
            'Chill',
            'Medium',
            'https://cdn.pixabay.com/photo/2013/11/28/12/14/dog-220457_960_720.jpg',
            [ 'parvo', 'hydrophobia', 'vermifuge' ]
        )
    ];

    getDogs() {
        return this.dogs.slice();
        console.log(this.dogs);
    }
}
