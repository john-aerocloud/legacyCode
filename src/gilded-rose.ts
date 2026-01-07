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

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const SULFURAS_NAME = 'Sulfuras, Hand of Ragnaros';
const AGED_BRIE_NAME = 'Aged Brie';
const BACKSTAGE_PASSES_NAME = 'Backstage passes to a TAFKAL80ETC concert';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name != AGED_BRIE_NAME && item.name != BACKSTAGE_PASSES_NAME) {
        if (item.quality > MIN_QUALITY && item.name != SULFURAS_NAME) {
          item.quality = item.quality - 1
        }
      } else if (item.quality < MAX_QUALITY) {
        item.quality = item.quality + 1

        if (item.name == BACKSTAGE_PASSES_NAME && item.quality < MAX_QUALITY) {
          if (item.sellIn < 11) {
            item.quality = item.quality + 1
          }

          if (item.sellIn < 6) {
            item.quality = item.quality + 1
          }
        }
      }

      if (item.name != SULFURAS_NAME) {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn >= 0){
        continue;
      }

      if (item.name == AGED_BRIE_NAME) {
        if (item.quality < MAX_QUALITY) {
          item.quality = item.quality + 1;
        }
        continue;
      }

      if (item.name != BACKSTAGE_PASSES_NAME) {
        if (item.quality > MIN_QUALITY && item.name != SULFURAS_NAME) {
          item.quality = item.quality - 1
        }
      } else {
        item.quality = 0
      }
    }

    return this.items;
  }
}
