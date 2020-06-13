const link = require("../link");

test("Changes -- to m-dash", () => {
  expect(link("Go to https://www.example.com/pathname?a=123&b=456.")).toBe(
    'Go to <a href="https://www.example.com/pathname?a=123&b=456">example.com</a>.'
  );
});