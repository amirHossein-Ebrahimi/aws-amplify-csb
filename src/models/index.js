// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cooler } = initSchema(schema);

export {
  Cooler
};