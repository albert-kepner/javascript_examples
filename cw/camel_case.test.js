String.prototype.camelCase = function () {
    // Write a regex string replacement that capitalizes the first letter of each word
    // The first letter of the first word should be capitalized
    let s1 = this.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    let s2 = s1.replace(/\s/g, '');
    return s2;
}


it("camel.tests", () => {
    expect("test case".camelCase()).toBe("TestCase");
    expect("camel Case method".camelCase()).toBe("CamelCaseMethod");
    expect("say hello".camelCase()).toBe("SayHello");
    expect("camel case word".camelCase()).toBe("CamelCaseWord");
    expect("".camelCase()).toBe("");
});
