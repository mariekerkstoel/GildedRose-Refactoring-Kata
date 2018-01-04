describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should increase quality of Aged brie when updateQuality is called", function(){
    var shop = new Shop([new Item("Aged Brie", 6,8)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(9);
  });

  it("quality of item should never decrease below 0", function(){
    var shop = new Shop([new Item("Apple", 0,0)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(0);
  });

  it("quality of item should never be above 50", function(){
    var shop = new Shop([new Item("Aged Brie", 6,50)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(50);
  });

  it("Sulfuras should never change in quality", function(){
    var shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 6,80)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(80);
  });

  it("Sulfuras should never change in sellin", function(){
    var shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 6,3)]);
    var updated = shop.updateQuality();
    expect(updated[0].sellIn).toEqual(6);
  });

  it("Backstage passes should increase in quality by 2 as there are 10 days or less", function(){
    var shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 30)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(32);
  });

  it("Backstage passes should increase in quality by 3 as there are 5 days or less", function(){
    var shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(33);
  });

  it("Backstage passes should drop to 0 in quality after sell by date", function(){
    var shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(0);
  });

  it("Conjured items should degrade in quality twice as fast as normal items", function(){
    var shop = new Shop([new Item('Conjured Apple', 5, 30)]);
    var updated = shop.updateQuality();
    expect(updated[0].quality).toEqual(28);
  });
});
