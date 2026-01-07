import { test, expect, describe } from 'vitest';

import { Item, GildedRose } from './gilded-rose';

describe('Gilded Rose', () => {

  test('should decrease quality by 2 for rack normal items', () => {
    const gildedRose = new GildedRose([new Item('racksandwich', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0]?.quality).toBe(8);
  });

  test('should decrease quality by 2 for rack normal items (sellIn less than 0)', () => {
    const gildedRose = new GildedRose([new Item('racksandwich', -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0]?.quality).toBe(0);
  });

  describe('Aged Brie', () => {

    describe('Quality tests', () => {
      // TODO - need to understand why 50 is threshold - when we understand, use constant
      test('should increase quality(max 50) for special item Aged Brie (when quality is low)', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(6);
      });
      test('should increase quality(max 50) for special item Aged Brie (when quality is 48)', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 48)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(50);
      });
      test('should increase quality (max 50) for special item Aged Brie (when quality is 49)', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(50);
      });

      test('should not decrease quality for special item Aged Brie (when quality is 50)', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(50);
      });

      test('should increase quality for special item Aged Brie (when quality is above 50)', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 67)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(67);
      });
    });
    // TODO - sellIn tests
  });

  describe.only('Backstage passes to a TAFKAL80ETC concert', () => {
    describe('Quality tests', () => {
      // TODO - need to understand why 50 is threshold - when we understand, use constant
      test('should zero quality for special item Backstage passes to a TAFKAL80ETC concert (when sellIn is 0)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(0);
      });
      test('should increase quality for special item Backstage passes to a TAFKAL80ETC concert (when sellIn above 0)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(7);
      });

      test('should increase quality for special item Backstage passes to a TAFKAL80ETC concert (when sellIn more than 5)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(6);
      });

      test('should increase quality(by 2) for special item Backstage passes to a TAFKAL80ETC concert (when sellIn less than 11)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 27)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(29);
      });


      test('should increase quality(by 2) for special item Backstage passes to a TAFKAL80ETC concert (when sellIn more than 12 less than 50)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 27)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(28);
      });

      test('should increase quality(by 3) for special item Backstage passes to a TAFKAL80ETC concert (when sellIn less than 6)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 47)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(50);
      });
      test('should increase quality (max 50) for special item Backstage passes to a TAFKAL80ETC concert (when quality is 49)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(50);
      });

      test('should not decrease quality for special item Backstage passes to a TAFKAL80ETC concert (when quality is 50)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(50);
      });

      test('should increase quality for special item Backstage passes to a TAFKAL80ETC concert (when quality is above 50)', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 67)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(67);
      });
    });
    // TODO - sellIn tests
  });
  describe('Sulfuras, Hand of Ragnaros', () => {
    describe('Quality tests', () => {
      test('should not change quality 10 for one for special item Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(10);
      });
      test('should not change quality 0 for special item Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(0);
      });

      test('should not change quality less than 0 for special item Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(1);
      });

      test('should not change quality above 50 for special item Sulfuras, Hand of Ragnaros ', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 51)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(51);
      });

      test('should not change quality above 50 for special item Sulfuras, Hand of Ragnaros (sell above 0) ', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 4, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0]?.quality).toBe(20);
      });
    });
  });

});