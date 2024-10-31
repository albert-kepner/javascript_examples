
class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    page_count() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    item_count() {
        return this.collection.length;
    }

    page_item_count(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.page_count()) {
            return -1;
        }
        return Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage);
    }

    page_index(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

test('page', () => {
    const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
    expect(helper.page_count()).toEqual(2);
    expect(helper.item_count()).toEqual(6);
    expect(helper.page_item_count(0)).toEqual(4);
    expect(helper.page_item_count(1)).toEqual(2);
    expect(helper.page_item_count(2)).toEqual(-1);
    expect(helper.page_index(5)).toEqual(1);
    expect(helper.page_index(2)).toEqual(0);
    expect(helper.page_index(20)).toEqual(-1);
    expect(helper.page_index(-10)).toEqual(-1);
});

test('page', () => {
    const helper = new PaginationHelper([], 4);
    expect(helper.page_count()).toEqual(0);
    expect(helper.item_count()).toEqual(0);
    expect(helper.page_item_count(0)).toEqual(-1);
    expect(helper.page_index(5)).toEqual(-1);
});





// helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
// helper.page_count() # should == 2
// helper.item_count() # should == 6
// helper.page_item_count(0) # should == 4
// helper.page_item_count(1) # last page - should == 2
// helper.page_item_count(2) # should == -1 since the page is invalid

// # page_index takes an item index and returns the page that it belongs on
// helper.page_index(5) # should == 1 (zero based index)
// helper.page_index(2) # should == 0
// helper.page_index(20) # should == -1
// helper.page_index(-10) # should == -1 because negative indexes are invalid