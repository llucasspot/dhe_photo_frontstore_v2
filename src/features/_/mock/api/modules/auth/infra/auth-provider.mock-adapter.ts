import { Finder } from '../../../../database/domain';
import { CustomersDaoPort } from '../../../../database/modules/auth/domain/customers-dao.port.ts';
import { ForMockControllerService } from '../../../domain/for-mock-controller-service';

import { inject, singleton } from '#di';
import {
  AuthProviderPort,
  AuthResponse,
  AuthUser,
  SignInBody,
} from '#features/auth/domain';

@singleton()
export class AuthProviderMockAdapter
  extends ForMockControllerService
  implements AuthProviderPort
{
  constructor(
    @inject(CustomersDaoPort)
    private readonly customersDao: CustomersDaoPort,
  ) {
    super();
  }

  async getUserInfo(userId: string): Promise<AuthUser> {
    const customer = await this.customersDao.getById(userId);

    if (!customer) {
      throw new Error('Invalid credentials');
    }

    return customer;
  }

  async signIn({ email }: SignInBody): Promise<AuthResponse> {
    let customer = await this.customersDao.get(
      new Finder('customers').filtersWith(['email', '$equals', email]),
    );

    if (!customer) {
      customer = await this.customersDao.save({ email });
    }

    return {
      authToken: `mock_customer_${customer.id}`,
      userId: customer.id,
    };
  }

  async logout(): Promise<void> {}
}
