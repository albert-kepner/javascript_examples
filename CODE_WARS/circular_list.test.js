class CircularList {
    constructor(...list) {
        if (Array.isArray(list) && list.length > 0) {
            this.the_list = list;
            this.current = 0;
        } else {
            throw new Error('No list provided');
        }
    }

    the_list = null;
    current = 0;
    initizalized = false;

    next() {
        if (!this.initizalized) {
            this.initizalized = true;
            return this.the_list[this.current];
        }
        this.current++;
        this.current = this.current % this.the_list.length;
        return this.the_list[this.current];
    }

    prev() {
        if (!this.initizalized) {
            this.current  = this.the_list.length - 1;
            this.initizalized = true;
            return this.the_list[this.current];
        }
        this.current--;
        if (this.current < 0) {
            this.current = this.the_list.length - 1;
        }
        return this.the_list[this.current];
    }
}

test('CircularList', () => {
    let list = new CircularList(1, 2, 3, 4);
    expect(list.next()).toBe(1);
    expect(list.next()).toBe(2);
    expect(list.next()).toBe(3);
    expect(list.next()).toBe(4);
    expect(list.next()).toBe(1);
    expect(list.prev()).toBe(4);
    expect(list.prev()).toBe(3);
    expect(list.prev()).toBe(2);
    expect(list.prev()).toBe(1);
    expect(list.prev()).toBe(4);
    expect(list.prev()).toBe(3);
    expect(list.prev()).toBe(2);
    expect(list.prev()).toBe(1);
});

it("Test circular string list", function() {
    let list = new CircularList("one", "two", "three");
    expect(list.next()).toBe("one");
    expect(list.next()).toBe("two");
    expect(list.next()).toBe("three");
    expect(list.next()).toBe("one");
    expect(list.prev()).toBe("three");
    expect(list.prev()).toBe("two");
    expect(list.prev()).toBe("one");
    expect(list.prev()).toBe("three");
  });

module.exports = CircularList;  // export the CircularList class
