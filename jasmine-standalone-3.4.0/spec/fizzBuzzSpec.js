describe( "Fizzbuzz", function(){

  var fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });
  describe("multiples of 3", function(){
    it("fizzes for 3", function(){
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });
  });
  describe("multiples of 5 ", function(){
    it("fizzes for 5", function(){
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });
  });
  describe("multiple of 3 and 5", function(){
    it("Fizzbuzzes for 15", function(){
    expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });
  });
});
