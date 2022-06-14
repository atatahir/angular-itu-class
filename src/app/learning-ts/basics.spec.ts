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
})
     

})