function sumOfTwo(nums1, nums2, value) {
  let result;
  nums1.forEach((n1) => {
    if (nums2.some((n2) => n2 + n1 === value)) {
      result = true;
      return;
    }
  });
  return result;
}

/**
 * Test Suite
 */
describe("sumOfTwo()", () => {
  it("returns true if a value can be found that by adding one number from each list", () => {
    // arrange
    const nums1 = [1, 2, 3];
    const nums2 = [10, 20, 30, 40];
    const value = 42;

    // act
    const result = sumOfTwo(nums1, nums2, value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(true);
  });
});
