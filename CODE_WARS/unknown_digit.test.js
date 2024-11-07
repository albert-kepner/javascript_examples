// describe('unknown', () => {
//   const testCases = [
//     ['1+1=?', 2],
//     ['123*45?=5?088', 6],
//     ['-5?*-1=5?', 0],
//     ['19--45=5?', -1],
//     ['??*??=302?', 5],
//     ['?*11=??', 2],
//     ['??*1=??', 2],
//     ['??+??=??', -1]
//   ];
//   for(const [exp, expected] of testCases)
//     test(`unknown`, () => {
//       expect(solveExpression(exp), expected);
//     });
// });

// const testCases = [
//     ['1+1=?', 2],
//     ['123*45?=5?088', 6],
//     ['-5?*-1=5?', 0],
//     ['19--45=5?', -1],
//     ['??*??=302?', 5],
//     ['?*11=??', 2],
//     ['??*1=??', 2],
//     ['??+??=??', -1]
//   ];


test('unknown', ()=> {
    expect(solveExpression(testCases[0][0])).toBe(testCases[0][1]);
});

