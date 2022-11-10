import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

    it('should return the search result', () => {
      const pipe = new SearchPipe();
      expect(pipe.transform('abc')).toEqual('abc');
      });
});
