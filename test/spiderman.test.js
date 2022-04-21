import Spiderman from './../app/spiderman'

/* 
describe("Test Suite Dummy Description", () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(18);
  });
})
*/
describe("Unit test for spiderman class", () => {
    test('1) Create an Spiderman object', () => {
        //Instancia de Spiderman      
        const andrewGarfield = new Spiderman("Spiderman", 31, "Andrew Garfield", 2, "Sony");
        //Validar que el código Funcione
        expect(andrewGarfield.name).toBe("Spiderman");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movie).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");
    });
})