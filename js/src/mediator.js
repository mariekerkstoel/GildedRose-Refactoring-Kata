class Mediator {
  constructor(agedbrie = new AgedBrie()){
    this.agedbrie = agedbrie
  }

  checkAllItems(item){
    this.checkAgedBrie(item);
  };

  checkAgedBrie(item){
    if(item.name == 'Aged Brie'){
      this.agedbrie.updateQuality(item)
      this.agedbrie.updateSellIn(item)
    };
  };
};
