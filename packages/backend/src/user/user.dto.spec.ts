import { GithubCodeDto } from './user.dto';

describe('UserDto', () => {
  it('should be defined', () => {
    expect(new GithubCodeDto()).toBeDefined();
  });
});
