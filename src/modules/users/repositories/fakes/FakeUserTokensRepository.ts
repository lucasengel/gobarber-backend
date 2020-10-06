import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import { v4 as uuid } from 'uuid';
import IUserTokensRepository from '../IUserTokesRepository';

class FakeUserTokensRepository implements IUserTokensRepository {
  private tokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const token = new UserToken();

    Object.assign(token, {
      id: uuid(),
      token: uuid(),
      user_id,
    });

    this.tokens.push(token);

    return token;
  }
}

export default FakeUserTokensRepository;
