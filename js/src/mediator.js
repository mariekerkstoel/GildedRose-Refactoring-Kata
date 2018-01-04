class Mediator {
  constructor(agedbrie = new AgedBrie(), pass = new Pass()){
    this.agedbrie = agedbrie
    this.pass = pass
  }

  checkAllItems(item){
    this.checkAgedBrie(item);
    this.checkPass(item)
  };

  checkAgedBrie(item){
    if(item.name == 'Aged Brie'){
      this.agedbrie.updateQuality(item)
      this.agedbrie.updateSellIn(item)
    };
  };

  checkPass(item){
    if(item.name == 'Backstage passes to a TAFKAL80ETC concert')
    this.pass.updateQuality(item)
  }
};
