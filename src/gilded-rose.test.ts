import { test, expect, describe } from 'vitest';

import {Item, GildedRose} from './gilded-rose';

describe('Gilded Rose', () => {
  test('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  describe('Aged Brie', () => {
    test('increases in Quality the older it gets, if the sellIn is greater than 0', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(1);
    });

    test('do not increase quality if already at maximum, if the sellIn is greater than 0', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(1);
    });

    test('if the sellIn is 0, quality should increase by 2', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
      expect(items[0].sellIn).toBe(-1);
    });

    test('if the sellIn is 0, but quality is already 50, the quality should not increase', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(-1);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    test('if the sellIn is greater than 0, but sellIn less than 6, increase quality by 3', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(4);
    });

    test('if the sellIn is greater than 5, but sellIn less than 11, increase quality by 2', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
      expect(items[0].sellIn).toBe(9);
    });

    test('if the sellIn is greater than 11, increase quality by 1', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(11);
    });

    test('if the sellIn is greater than 11 and quality is greater than 50, then quality does not increase', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(11);
    });

    test('if the sellIn is greater than 11 and quality is less than 50, then increment quality by 1', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(11);
    });

    test('if the sellIn is greater than 11 and quality is less than 50, then increment quality', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(41);
      expect(items[0].sellIn).toBe(11);
    });

    test('if the sellIn is 0, quality is 0, it should remain 0', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    test('if the sellIn is 0, quality is greater than 0, it should be reset to 0', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    test('do not increase quality if already at maximum, if the sellIn is greater than 0', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(1);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    test('quality does not change, greater than max quality', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(0);
    });

    test('quality does not change, less than max quality', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(49);
      expect(items[0].sellIn).toBe(0);
    });

    test('sellIn does not change', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(1);
    });

   test('sellIn does not change. even if less than 0', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(-1);
    });
  });

  describe('Another item', () => {
    test('if quality is 0, do not change it', () => {
      const gildedRose = new GildedRose([new Item('Another item', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    test('if quality is greater than 0 and sellin is 0, decrement quality by 2', () => {
      const gildedRose = new GildedRose([new Item('Another item', 0, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    test('if quality is greater than 0 and sellin is greater than 0, decrement quality by 1', () => {
      const gildedRose = new GildedRose([new Item('Another item', 1, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(0);
    });
  });

  test('Empty array', () => {
    const gildedRose = new GildedRose([]);
    const items = gildedRose.updateQuality();
    expect(items.length).toBe(0);
  });
});