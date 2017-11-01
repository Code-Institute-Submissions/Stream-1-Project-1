describe("A check to see if the slide show is pointing at the correct slide", function() {

  it("If the slideshow comes to the end it should go back to slide 1", function() {
    expect(createSlideshow(146)).toBe(1);
  });

  it("If the slideshow goes to the beginning it should go to the last slide", function() {
    expect(createSlideshow(0)).toBe(145);
  });

  it("Otherwise it should point to itself", function() {
  	expect(createSlideshow(15)).toBe(15);
  })
});


describe("PlusSlide previous function", function() {

  it("check to see if the plusSlide function is subtracting properly", function() {
    expect(plusSlides(-1)).toBe(0);
  });

});

describe("PlusSlide Next function", function() {

	it("check to see if the plusSlide function is adding properly", function() {
 	   expect(plusSlides(1)).toBe(2);
 	  });
 });