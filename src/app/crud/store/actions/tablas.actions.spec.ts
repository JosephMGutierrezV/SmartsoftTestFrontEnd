import * as fromTablas from './tablas.actions';

describe('loadTablass', () => {
  it('should return an action', () => {
    expect(fromTablas.loadTablass().type).toBe('[Tablas] Load Tablass');
  });
});
