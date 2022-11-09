import { GlobalStock } from './global-stock';

describe('GlobalStock', () => {
  it('should create an instance', () => {
    expect(new GlobalStock('','',0,0,0,0)).toBeTruthy();
  });
});
