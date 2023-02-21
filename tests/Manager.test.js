const Manager = require('../models/Manager')

describe('Manager', () => {
    it('should return the correct role for a LOTR character', () => {
      const manager = new Manager('Gandalf', 'gandalf@wizard.com', '4', '54321');
  
      expect(manager.getRole()).toBe('Manager');
    })
});