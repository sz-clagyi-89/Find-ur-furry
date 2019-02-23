import { Dog } from './dog.model';

export class DogService {
    private dogs: Dog[] = [
        new Dog(
            'Nina',
            'Daschund mix',
            'Nina et vehicula arcu. Donec tempus elit a tortor ornare, quis fermentum dui vehicula. Pellentesque et arcu nec odio aliquam maximus.',
            'Small',
            'https://www.maxpixel.net/static/photo/1x/Studio-Animal-View-Dachshund-Dog-1232449.jpg',
            [ 'parvo', 'hydrophobia' ]
        ),
        new Dog(
            'Roxy',
            'Daschund mix',
            'Roxy pellentesque molestie volutpat. Ut venenatis nulla non quam vehicula molestie. Quisque condimentum purus velit, id efficitur libero mollis a',
            'Small',
            'https://cdn.pixabay.com/photo/2017/02/03/17/43/dachshund-2035700_960_720.jpg',
            [ 'parvo', 'hydrophobia', 'vermifuge' ]
        ),
        new Dog(
            'Moncsi',
            'Poodle',
            'Moncsi laoreet magna vitae dolor eleifend, non scelerisque massa vulputate. Donec dignissim ornare magna, nec mattis massa venenatis at. Ut vitae massa sodales, rhoncus erat in, blandit libero. Suspendisse finibus pellentesque est ultrices ultricies. Donec at fringilla lacus, sed pharetra orci.',
            'Medium',
            'https://www.maxpixel.net/static/photo/1x/Mammal-Small-Dwarf-Poodle-Black-Dog-Cute-Pretty-3294512.jpg',
            [ 'parvo', 'hydrophobia', 'vermifuge' ]
        )
    ];

    getDogs() {
        return this.dogs.slice();
        console.log(this.dogs);
    }

    getDog(index: number) {
        return this.dogs[index];
    }
}
