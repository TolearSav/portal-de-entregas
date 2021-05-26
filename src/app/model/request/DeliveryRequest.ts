import { ClientIdRequest } from './ClientIdRequest';
import { RecipientRequest } from './RecipientRequest';
export class DeliveryRequest {
    public client: ClientIdRequest
    public recipient: RecipientRequest
    public rate: number
}