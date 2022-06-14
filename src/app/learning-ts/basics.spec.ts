describe('Variables and data types', () => {
    it('should declare a variable', () => {
        //var name; do not use the var as it does have scoping issues
        const name = 'Tahir' //const do not change so it does need an initial value
        const movie: string = 'Martian'

        //use let for variables that can change
        let age: number; 
        age = 40;
        age = 41;

        let car = 'toyota'; //This will implicitly assume that this will be a string
        //car = 2013; VScode settings are providing the error, but not javascript

        let year;
        year = '2013';
        year = 2013; //This will work because we did not initialized a type.
        console.log(car);
    })

describe('basic types', () => {
    it('should talk about types', () => {
        const n8: number = 12_234_8766;
        const n7: number = 3.14;
        const n6: number = 0xfff; //base 16
        const n5: number = 0o111; //base 8
        const n4: number = 0b11001 //base 2
        const n3: number = -Infinity;
        const n2: number = Infinity;
    })

    it('should talk about string', () => {
        const newString = new String('some string'); //using new keywords

        //using literal
        const singleQuote: string = 'some text'; 
        const doubleQuote: string = "some text";

        const trueName: string = 'template literals';

        //template literals using backticks
        const format: string = `it support
            multiple lines ${trueName}, and suuporting string interpolation`;

        const checkThisOut: string = `we can do math too like 1+1 = ${1+1}. 
            We can also camnn a function like ${getName()}`;
        console.log(checkThisOut);

        //concatenating a string is string w/ +
        const student: string = 'person 1';
        const action: string = 'did something'
        const sentence: string = student + ' ' + action;

        // string is iterable
        let person: string = 'Leto'
        expect(person[0]).toBe('L');

        expect(person.includes('L')).toBeTruthy();
        expect(person.indexOf('t')).toBe(2);
        expect(person.indexOf('m')).toBe(-1);
    })

    it('should talk about arrays', () => {
        const movies: string[] = ['Dune', 'Martian'];
        //List items does not have to be of the same type
        const moviesMultipleTypes = ['Dune', 'Martian', true, 1000];
        //const movies: string[] = ['Dune', 'Martian', true, 1000]; This will not be allowed becasue we are specifying a type
        //any type
        const moviesAny: any[] = ['Dune', 'Martian', true, 1000];  //should avoid using this
        const newMovies = [];
        newMovies[0] = 'Quite II';  //Can add to const lists, but should avoid using this
        //newMovies = movies will not work because they are const

        const moreMovies: string[] = new Array<string>(); //not used much

        const sentence = 'after this we will go to lunch to watch ' + movies[1];
        expect(sentence).toBe('after this we will go to lunch to watch Martian');

        //array will return 'undefined' instead for index out of range error

    })
})

function getName() {
    return ' Do you see it'
}

})