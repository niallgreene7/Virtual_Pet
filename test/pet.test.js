const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        const pet = new Pet('Niall');
        expect(pet.name).toEqual('Niall');
    });
  });

  describe('growUp', () => {
    it('increments the age by 1, increments the hunger by 5 and decreases the fitness by 3', () => {
      const pet = new Pet('Niall');
      pet.sleep();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(4);
      expect(pet.energy).toEqual(10);
    });
  });

  describe('growUp', () => {
    it('incriment the fitness by 4 but limited to 10', () => {
      const pet = new Pet('Niall');
      pet.walk();
      pet.walk();
      expect(pet.energy).toEqual(2);
    });
  });