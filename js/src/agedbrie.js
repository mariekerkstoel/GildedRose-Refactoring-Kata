class AgedBrie{
  constructor(){

  }
  updateQuality(item){
    if (item.quality > 0 && item.quality < 50) {
        item.quality = item.quality + 1;
    };
  };

  updateSellIn(item){
    item.sellby = item.sellby - 1;
  };

};
