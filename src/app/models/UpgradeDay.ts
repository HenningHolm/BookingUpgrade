import { UpgradeGroup } from "./UpgradeGroup";

export interface UpgradeDay{
    id:string;// date?
    date: Date;
    groups:UpgradeGroup[];
}