import { Dog } from './dog.model';

export class DogService {
    private dogs: Dog[] = [
        new Dog(
            'Nina',
            'Daschund mix',
            'Cheeky',
            'Small',
            [ 'parvo', 'hydrophobia' ]
        ),
        new Dog(
            'Roxy',
            'Daschund mix',
            'playfull',
            'Small',
            [ 'parvo', 'hydrophobia', 'vermifuge' ]
        ),
        new Dog(
            'Moncsi',
            'Poodle',
            'Chill',
            'Medium',
            [ 'parvo', 'hydrophobia', 'vermifuge' ]
        )
    ];

    getDogs() {
        return this.dogs.slice();
        console.log(this.dogs);
    }
}
