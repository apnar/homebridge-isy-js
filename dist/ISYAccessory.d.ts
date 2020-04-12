import { Categories, Characteristic, CharacteristicValue, Service } from 'hap-nodejs';
import { Logger } from 'homebridge/lib/logger';
import { PlatformAccessory } from 'homebridge/lib/platformAccessory';
import { ISYNode } from 'isy-js';
export declare class AccessoryContext {
    address: string;
}
export declare class ISYAccessory<T extends ISYNode, TCategory extends Categories> {
    [x: string]: any;
    logger: Logger;
    device: T;
    address: any;
    UUID: string;
    informationService: Service;
    name: string;
    displayName: string;
    platformAccessory: PlatformAccessory;
    category: TCategory;
    primaryService: Service;
    bind<TFunction extends Function>(func: TFunction): TFunction;
    constructor(device: T);
    map(propertyName: keyof T): {
        characteristic: typeof Characteristic;
        service: Service;
    };
    configure(accessory?: PlatformAccessory): void;
    setupServices(): Service[];
    handleExternalChange(propertyName: string, value: any, formattedValue: string): void;
    updateCharacteristicValue(value: CharacteristicValue, characteristic: typeof Characteristic, service?: Service): void;
    convertToHK(propertyName: string, value: any): any;
    identify(): void;
}
