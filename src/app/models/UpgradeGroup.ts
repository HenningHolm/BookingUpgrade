import { UpgradeSlot } from "./UpgradeSlot";

export interface UpgradeGroup{
    id:string;
    startTime: string;
    endTime: string;
    executed: boolean;
    slots:UpgradeSlot[];
}