import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CoolerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cooler {
  readonly id: string;
  readonly name?: string;
  readonly image?: string;
  readonly adress?: string;
  readonly url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cooler, CoolerMetaData>);
  static copyOf(source: Cooler, mutator: (draft: MutableModel<Cooler, CoolerMetaData>) => MutableModel<Cooler, CoolerMetaData> | void): Cooler;
}