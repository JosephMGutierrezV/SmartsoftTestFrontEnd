import * as fromDatos from './datos.actions';

describe('loadDatoss', () => {
  it('should return an action', () => {
    expect(fromDatos.loadDatoss().type).toBe('[Datos] Load Datoss');
  });
});
