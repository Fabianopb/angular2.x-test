import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {

  let pipe;

  beforeAll(() => {
    pipe = new DateFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('normal case', () => {
    expect(pipe.transform('2017-01-10')).toBe('10.1.2017');
  });

  it('number as input', () => {
    expect(pipe.transform(12)).toBe('');
  });

  it('array as input', () => {
    expect(pipe.transform([])).toBe('');
  });

  it('null or undefined as input', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

});
