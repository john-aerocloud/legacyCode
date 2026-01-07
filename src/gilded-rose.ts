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

const updateQuality = (increment: number, item: Item) => {
  const newValue = Math.max(MIN_QUALITY, Math.min(MAX_QUALITY, item.quality + increment));
  item.quality = newValue;
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name == SULFURAS_NAME) {
        continue;
      }
      if (item.name == AGED_BRIE_NAME) {
         updateQuality(1, item);
      } else if (item.name == BACKSTAGE_PASSES_NAME) {
        const increment = item.sellIn < 11 ? (item.sellIn < 6 ? 3 : 2) : 1;
        updateQuality(increment, item);
      } else {
        updateQuality(-1, item);
      }

      item.sellIn = item.sellIn - 1;
      if (item.sellIn >= 0) {
        continue;
      }

      if (item.name == AGED_BRIE_NAME) {
        updateQuality(1, item);
      } else if (item.name == BACKSTAGE_PASSES_NAME) {
        item.quality = 0
      } else {
        updateQuality(-1, item);
      }
    }

    return this.items;
  }
}
