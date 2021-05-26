import { ClientResponse } from './ClientResponse';
import { RecipientResponse } from './RecipientResponse';
export class DeliveryResponse {
    public client: ClientResponse
    public recipient: RecipientResponse
    public rate: number
    public status: string
    public dateOrder: Date
    public dateDelivered: Date
}