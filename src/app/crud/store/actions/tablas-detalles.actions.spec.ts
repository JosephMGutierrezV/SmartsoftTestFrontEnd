import * as fromTablasDetalles from './tablas-detalles.actions';

describe('loadTablasDetalless', () => {
  it('should return an action', () => {
    expect(fromTablasDetalles.loadTablasDetalless().type).toBe('[TablasDetalles] Load TablasDetalless');
  });
});
