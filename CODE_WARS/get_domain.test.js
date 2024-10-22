function domainName(url){
    // extract domain name from url
    return url.replace(/(https?:\/\/)?(www\.)?/,'').split('.')[0];
}


test('domainName', () => {
    expect(domainName("http://google.com")).toBe("google");
    expect(domainName("http://google.co.jp")).toBe("google");
    expect(domainName("www.xakep.ru")).toBe("xakep");
    expect(domainName("https://youtube.com")).toBe("youtube");
    expect(domainName("https://www.codewars.com")).toBe("codewars");
});