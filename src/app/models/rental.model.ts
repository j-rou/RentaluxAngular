import {BrandModel} from "./brand.model";
import {UsageModel} from "./usage.model";

export interface VehicleModel {

  id: number;
  brand: BrandModel;
  model: string;
  usage: UsageModel;

}
