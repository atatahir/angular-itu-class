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

        function makeSentence(name: string) {
            console.log(name + ' has watched the movie');
        }

        //foreach
        movies.forEach(makeSentence); //notice that a function can be passed as an argument

        movies.forEach((name) => {makeSentence(name)}); 

        //map
        //transform each and returns

        const testScores = [90, 98, 48, 87, 57];
        const modifiedScores = testScores.map(function(score: number) {
            return score + 10;
        });
        expect(testScores[0]).toBe(90);
        expect(modifiedScores[0]).toBe(100);

        const drivers = [
            {
                firstName: 'Ata',
                lastName: 'Tahir'
            },
            {
                firstName: 'Azam',
                lastName: 'Saud'
            }
        ]

        const fullNameofDrivers: string[] = drivers.map(driver => {
            return driver.firstName + ' ' + driver.lastName;
        })

        expect(fullNameofDrivers[0]).toBe('Ata Tahir');
        expect(fullNameofDrivers[1]).toBe('Azam Saud');
    })

    it('should talk about objects', () => {
        //this is typically not used
        class Cat {
            name: string =  'Jonty';
            sound() {
                console.log('meow')
            }
        }

        const myCat = new Cat();
        const colors: string[] = ['black', 'orange'];
        

        interface Animal {
            name:string,
            sound:string,
            superPower:string,
            age:number,
            colors: string[]
        }
        //using objects to describe data
        const dog: Animal = {
            name: 'Spot',
            sound: 'woof woof',
            superPower: 'Sense of smell',
            age: 10,
            colors //do not need to specify value for variable with same name. This will not work if variabke name was not 'colors'
        }

        let prop = 'org';
        expect(dog.name).toBe('Spot');
        expect(dog.sound).toBe('woof woof');
        expect(dog['superPower']).toBe('Sense of smell');
        expect(dog.age).toBe(10);
    })

    it('should talk about booleans', () => {
        let isDayTwo = true;
        const hasLab = false;   
        let whatIsDefault;
        let cat = 'Jonty'

        expect(cat).toBeTruthy();
        expect(isDayTwo).toBeTruthy();
        expect(whatIsDefault).toBeFalsy();
    })

    it('typing, interfaces, type aliases', () => {
        let someNum: number;
        let someString: string;
        let someArray: any[];
        let cat: (Cat1 | Cat2 | Cat3); //this can also be written as 
        // type Cat[] = Cat1 | Cat2 | Cat3;

        // const myCats: Cat[] = {[]};

        interface Cat1 {
            name: string,
            age: number,
            breed: string,
            color: string,
            sex: string
            ownerName?: string,
            isVaccinated: boolean
        }

        
        interface Cat2 {
            name: string,
            age: number,
            breed: string,
            color: string[],
            sex: string
            ownerName?: string,
            isVaccinated: boolean
        }

                
        interface Cat3 {
            name: string,
            age: number,
            breed: string[],
            color: string[],
        }
    })

    describe('functions', () => {
        it('should describe named function declarations', () => {
            addNumbers(10, 5);  //Here called arguments
            function addNumbers(num1: number, num2: number, ) : number { // Here called parameters. There is also no need to add function. Need to specify type for params and return value
                return num1+num2;
            }
        })
        
        describe('should describe anonymous function express', () => {
            it('Not an arrow function', () => {
                //add(10, 5) this will not work as this needs to be after we assign the add
                type mathFunction = (num1:number, num2: number) => number; 
                const add: mathFunction = function addNumbers(num1: number, num2:number, ) { // named anonymous function
                    return num1+num2;
                }
                expect(add(10, 5)).toBe(15);
            })

            it('Is an arrow function', () => {
              const add =  ((num1:number, num2: number) => {
                    return num1 + num2;
                })
            })
        })

    })
})

function getName() {
    return ' Do you see it'
}

})