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
  }
  getQuality(i){
    return this.items[i].quality
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.getName(i) != 'Aged Brie' && this.getName(i) != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.getQuality(i) > 0) {
          if (this.getName(i) != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.getQuality(i) - 1;
          }
        }
      } else {
        if (this.getQuality(i) < 50) {
          this.items[i].quality = this.getQuality(i) + 1;
          if (this.getName(i) == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.getQuality(i) < 50) {
                this.items[i].quality = this.getQuality(i) + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.getQuality(i) < 50) {
                this.items[i].quality = this.getQuality(i) + 1;
              }
            }
          }
        }
      }
      if (this.getName(i) != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.getName(i) != 'Aged Brie') {
          if (this.getName(i) != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.getQuality(i) > 0) {
              if (this.getName(i) != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.getQuality(i) - 1;
              }
            }
          } else {
            this.items[i].quality = this.getQuality(i) - this.getQuality(i);
          }
        } else {
          if (this.getQuality(i) < 50) {
            this.items[i].quality = this.getQuality(i) + 1;
          }
        }
      }
    }

    return this.items;
  }
}
