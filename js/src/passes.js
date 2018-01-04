class Pass {
  updateSellBy(item){
    item.sellIn = item.sellIn - 1;
  };

  updateWithinTenDays(item){
    if (item.sellIn < 11) {
      if (item.quality < 50) {
        item.quality = item.quality + 2;
      };
    };
  };

  updateWithinFiveDays(item){
    if (item.sellIn < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      };
    };
  };



  updateAfterSellByDate(item){
    if(item.sellIn < 0){
      item.quality = item.quality - item.quality
    };
  };

  updateQuality(item){
    this.updateSellBy(item)
    this.updateWithinTenDays(item)
    this.updateWithinFiveDays(item)
    this.updateAfterSellByDate(item)
  };
};
