const Intern = require('../models/Intern')

describe('Intern', () => {
    it('should return the correct role', () => {
      const intern = new Intern('Frodo', 'frodo@shire.com', '3', 'Rivendell University');
  
      expect(intern.getRole()).toBe('Intern');
    })
});