import { Dto } from '#core/domain';

export class Photographer extends Dto<Photographer> {
  id!: string;
  email!: string;
  password!: string;
}

export class Customer extends Dto<Customer> {
  id!: string;
  email!: string;
}
