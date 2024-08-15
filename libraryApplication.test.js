import checkBookAvailability from "./LibraryApplication.js";

//test whether a book is available
test("The Catcher in the Rye to be available", () => {
    expect(checkBookAvailability("The Catcher in the Rye")).toBe("The book is available for borrowing")
})


