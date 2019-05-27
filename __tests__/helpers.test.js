import { formatDate } from './../lib/helpers';

describe('formatDate function', () => {
  it('formats date to MM/DD/YYYY', () => {
    expect(formatDate('2019-01-14T14:51:23Z')).toEqual('01/15/2019');
  });
});
