import { Document } from 'mongoose';

export interface Poap extends Document {
  readonly idPoap: string;
  readonly namePoap: string;
  readonly createdat: Date;
}
