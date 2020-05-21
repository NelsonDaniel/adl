import { Recipient } from './Recipient';
export interface DeviceDetails {
    /**
     * @description Optional trusted client identifier for the device.
     */
    clientId: string;
    /**
     * @description Secret value for the device.
     */
    deviceSecret: string;
    /**
     * @description Form factor of the push device.
     */
    formFactor: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Unique identifier for the device generated by the device itself.
     */
    id: string;
    /**
     * @description Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.
     */
    metadata: {};
    /**
     * @description Platform of the push device.
     */
    platform: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    'push.recipient': Recipient;
    /**
     * @description the current state of the push device.
     */
    readonly 'push.state': unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}