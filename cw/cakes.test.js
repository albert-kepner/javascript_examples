function cakes(recipe, available) {
    let cakes = 1000000000;
    for (let key in recipe) {
        if (!available[key]) return 0;
    }
    for (let key in recipe) {
        let ratio = Math.floor(available[key] / recipe[key]);
        if (ratio === 0) return 0;
        if (cakes === 0) cakes = ratio;
        if (ratio < cakes) cakes = ratio;
    }
    return cakes;
}

describe('cakes', function () {
    it('pass example tests', function () {
        let recipe = { flour: 500, sugar: 200, eggs: 1 };
        let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
        expect(cakes(recipe, available)).toBe(2);

        recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
        available = { sugar: 500, flour: 2000, milk: 2000 };
        expect(cakes(recipe, available)).toBe(0);
    });
});