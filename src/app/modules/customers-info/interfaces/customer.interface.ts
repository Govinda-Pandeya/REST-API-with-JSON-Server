import { Address } from './address.interface';
import { PhoneNumber } from './phone-number.interface';

export interface Customer {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    phoneNumber: PhoneNumber[];
}