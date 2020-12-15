class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length ? this.collection.length : -1;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    // if this is not the last page
    if (pageIndex > this.pageCount() - 1) return -1;
    else if (pageIndex < this.pageCount() - 1) {
      return this.itemsPerPage;
    } else return this.itemCount() - pageIndex * this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    if (itemIndex > this.itemCount() || itemIndex < 0) return -1;
    else return Math.floor(itemIndex / this.itemsPerPage);
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount(), 2); //should == 2
console.log(helper.itemCount(), 6); //should == 6
console.log(helper.pageItemCount(0), 4); //should == 4
console.log(helper.pageItemCount(1), 2); // last page - should == 2
console.log(helper.pageItemCount(2), -1); // should == -1 since the page is invalid

console.log(helper.pageIndex(5), 1); //should == 1 (zero based index)
console.log(helper.pageIndex(2), 0); //should == 0
console.log(helper.pageIndex(20), -1); //should == -1
console.log(helper.pageIndex(-10), -1); //should == -1
