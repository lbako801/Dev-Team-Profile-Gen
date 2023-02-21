const Other = require('../models/Other');

describe('Other', () => {
    it('should return the custom role for the elephant things from LOTR', () => {
        const other = new Other('Oliphant', 'oliphant@gmail.com', '2', 'Giant Elephant', 'oliphantgithub');
  
        expect(other.getRole()).toBe('Giant Elephant');
    })
});