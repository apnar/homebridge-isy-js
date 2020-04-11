"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils");
const platformAccessory_1 = require("homebridge/lib/platformAccessory");
const ISYPlatform_1 = require("./ISYPlatform");
exports.PluginName = 'homebridge-isy';
exports.PlatformName = 'ISY';
exports.default = (homebridge) => {
    //const Service = homebridge.hap.Service;
    //const Hap = homebridge.hap;
    //const Characteristic = homebridge.hap.Characteristic;
    platformAccessory_1.PlatformAccessory.prototype.getOrAddService = function (service) {
        const acc = this;
        const serv = acc.getService(service);
        if (!serv) {
            return acc.addService(service);
        }
        return serv;
    };
    homebridge.registerPlatform(exports.PluginName, exports.PlatformName, ISYPlatform_1.ISYPlatform, true);
    return this;
};
