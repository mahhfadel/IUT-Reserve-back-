import { PartialType } from '@nestjs/mapped-types';
import { CreateHoraryDto } from './create-horary.dto';

export class UpdateHoraryDto extends PartialType(CreateHoraryDto) {}
