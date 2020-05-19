const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        const pet = new Pet('Niall');
        expect(pet.name).toEqual('Niall');
    });
  });

  describe('sleep', () => {
    it('increments the age by 1, increments the hunger by 5 and decreases the fitness by 3', () => {
      const pet = new Pet('Niall');
      pet.sleep();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(4);
      expect(pet.energy).toEqual(10);
    });
  });

  describe('walk', () => {
    it('decrease the energy on a walk by 5 but limit to 0', () => {
      const pet = new Pet('Niall');
      pet.walk();
      pet.walk();
      expect(pet.energy).toEqual(0);
    });
    it('decrease the energy on a walk by 5 but limit to 0', () => {
      const pet = new Pet('Niall');
      pet.energy = 2
      pet.walk();
      expect(pet.energy).toEqual(0);
    });
    it('decrease the energy on a walk by 5 but limit to 0', () => {
      const pet = new Pet('Niall');
      pet.walk();
      expect(pet.energy).toEqual(5);
    });
  });

  describe('killPet', () => {
    it('when over walking with no footthe pet it will die', () => {
      const pet = new Pet('Niall');
      pet.walk();
      pet.walk();
      pet.walk();
      pet.walk();
      pet.walk();
      pet.walk();
      expect(pet.isAlive).toEqual(false);
    });
    it('when over walking with no food the pet it will die', () => {
      const pet = new Pet('Niall');
      pet.walk();
      pet.walk();
      pet.walk();
      pet.feed();
      pet.feed();
      pet.walk();
      expect(pet.isAlive).toEqual(true);
    });
  });

  describe('limitMeals', () => {
    it('never go over 3 meals before sleeping', () => {
      const pet = new Pet('Niall');
      pet.feed();
      pet.feed();
      pet.feed();
      pet.feed();
      expect(pet.mealsToday).toEqual(3);
    });
    it('when sleep reset the mealsToday', () => {
      const pet = new Pet('Niall');
      mealsToday = 2
      pet.sleep();
      pet.feed();
      expect(pet.mealsToday).toEqual(1);
    });

  });