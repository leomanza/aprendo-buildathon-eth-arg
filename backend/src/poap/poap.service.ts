import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Poap } from './interfaces/poap.interface';
import { CreatePoapDTO } from './dto/createPoapDTO';
@Injectable()
export class PoapService {
  constructor(@InjectModel('Poap') private poapModel: Model<Poap>) {}

  async createPoap(createPoapDTO: CreatePoapDTO): Promise<Poap> {
    const poap = new this.poapModel(createPoapDTO);
    return await poap.save();
  }

  async getPoapByIdPoap(idPoap: string): Promise<Poap> {
    const poap = this.poapModel.findOne({ idPoap });
    return poap;
  }
}
