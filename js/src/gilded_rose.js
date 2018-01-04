class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  getName(i){
    return this.items[i].name
  };

  getQuality(i){
    return this.items[i].quality
  };

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.adjustQuality(i)
      this.adjustSellIn(i)
      this.adjustQualityPastDate(i)
    }
    return this.items;
  }

  adjustQuality(i){
    if (this.getName(i) != 'Aged Brie' && this.getName(i) != 'Backstage passes to a TAFKAL80ETC concert') {
      this.adjustSulfurasQuality(i)
    } else {
      this.adjustTicketQuality(i)
    }
  }

  adjustSulfurasQuality(i){
    if (this.getQuality(i) > 0 && this.getName(i) != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].quality = this.getQuality(i) - 1;
      this.adjustConjuredQuality(i)
    };
  };


  adjustConjuredQuality(i){
    if (this.items[i].name.includes("Conjured") && this.items[i].quality > 1){
      this.items[i].quality = this.getQuality(i) - 1
    };
  };

  adjustTicketQuality(i){
    if (this.getQuality(i) < 50) {
      this.items[i].quality = this.getQuality(i) + 1;
      if (this.getName(i) == 'Backstage passes to a TAFKAL80ETC concert') {
        this.ticketUnderTen(i);
        this.ticketUnderFive(i);
      };
    };
  };

  ticketUnderTen(i){
    if (this.items[i].sellIn < 11 && this.getQuality(i) < 50) {
      this.items[i].quality = this.getQuality(i) + 1;
    };
  };

  ticketUnderFive(i){
    if (this.items[i].sellIn < 6 && this.getQuality(i) < 50) {
      this.items[i].quality = this.getQuality(i) + 1;
    };
  };

  adjustSellIn(i){
    if (this.getName(i) != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    };
  };

  adjustQualityPastDate(i){
    if (this.items[i].sellIn < 0) {
      if (this.getName(i) != 'Aged Brie') {
        this.qualityTicketsZero(i);
      } else {
        if (this.getQuality(i) < 50) {
          this.items[i].quality = this.getQuality(i) + 1;
        };
      };
    };
  };

  qualityTicketsZero(i){
    if (this.getName(i) != 'Backstage passes to a TAFKAL80ETC concert') {
      this.subtractQualityNormalItems(i);
    } else {
      this.items[i].quality = 0;
    };
  };

  subtractQualityNormalItems(i){
    if (this.getQuality(i) > 0) {
      if (this.getName(i) != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality = this.getQuality(i) - 1;
        if(this.items[i].name.includes('Conjured')){
          this.items[i].quality = this.getQuality(i) - 1;
        };
      };
    };
  };
};
