// import  getDay  from "../controllers/day";
// import { Date } from "../controllers/day";
const _date = require("../controllers/day")
describe('test get day function', () => {

  test('2023-04-09 to equal อาทิตย์', () => {
    expect(_date.day("2023-04-09")).toBe("อาทิตย์");
  });

  test('2023-04-10 to equal จันทร์', () => {
    expect(_date.day("2023-04-10")).toBe("จันทร์");
  });
  test('2023-04-11 to equal อังคาร', () => {
    expect(_date.day("2023-04-04")).toBe("อังคาร");
  });
  test('2023-04-12 to equal อังคาร', () => {
    expect(_date.day("2023-04-05")).toBe("พุธ");
  });
  test('2023-04-13 to equal พฤหัสบดี', () => {
    expect(_date.day("2023-04-06")).toBe("พฤหัสบดี");
  });
  test('2023-04-14 to equal พฤหัสบดี', () => {
    expect(_date.day("2023-04-07")).toBe("ศุกร์");
  });

  test('2023-04-15 to equal ศุกร์', () => {
    expect(_date.day("2023-04-08")).toBe("เสาร์");
  });
 

});




