import { PassCustomPipe } from './pass-custom.pipe';

describe('PassCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new PassCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
