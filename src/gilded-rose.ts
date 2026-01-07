export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie') {
        if (this.items[i].quality < 50) {
          if (this.items[i].quality < 49) {
            this.items[i].quality = this.items[i].quality + 2;
          } else {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i]?.quality < 50) {
          if (this.items[i].sellIn <= 0) {
            this.items[i].quality = 0;
          } else if (this.items[i].sellIn < 6) {
            this.items[i].quality = this.items[i].quality + 3;
          } else if (this.items[i].sellIn < 6 && this.items[i].sellIn < 11) {
            this.items[i].quality = this.items[i].quality + 2;
          } else {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      } else {
        if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              console.log('Decreasing quality (1) for ', this.items[i]?.name, ' from ', this.items[i]?.quality, ' to ', this.items[i]?.quality - 1);
              this.items[i].quality = this.items[i].quality - 1
            }
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
            console.log('Increasing quality for >> ', this.items[i]?.name, ' from ', this.items[i]?.quality - 1, ' to ', this.items[i]?.quality);
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  console.log('Increasing quality (2) for >> ', this.items[i]?.name, ' from ', this.items[i]?.quality - 1, ' to ', this.items[i]?.quality + 1);
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  console.log('Increasing quality (3) for >> ', this.items[i]?.name, ' from ', this.items[i]?.quality - 1, ' to ', this.items[i]?.quality + 1);
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        console.log('sellIn for ', this.items[i]?.name, ' is now ', this.items[i]?.sellIn);
        console.log('Quality for ', this.items[i]?.name, ' is now ', this.items[i]?.quality);
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                console.log('Decreasing quality (2) for ', this.items[i]?.name, ' from ', this.items[i]?.quality, ' to ', this.items[i]?.quality - 1);
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            console.log('Decreasing quality (3) for ', this.items[i]?.name, ' from ', this.items[i]?.quality, ' to ', this.items[i]?.quality - 1);
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        }
      }
    }
    console.log('Items at end of updateQuality: ', this.items);
    return this.items;
  }
}

//BACKSTAGE
// sellin more than less than 6 goes up by 3
// sellin less than 11 goes up by 2
// sellin 0 quality to 0