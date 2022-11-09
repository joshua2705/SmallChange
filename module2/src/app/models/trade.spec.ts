import { trade } from './trade';

describe('Trade', () => {
  it('should create an instance', () => {
    expect(new trade(0,0,"","",0,0,"")).toBeTruthy();
  });
});
