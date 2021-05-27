import { StatusDelivery } from '../enum/StatusDelivery';
import { Client } from './Client';
import { Occurrences } from './Occurrences';
import { Recipient } from './Recipient';

export class Delivery {
    public id: number
    public recipient: Recipient
    public rate: number
    public statusDelivery: StatusDelivery
    public dateOrder: Date
    public dateDelivery: Date
    public client: Client
    public occurrences: Occurrences[]
}