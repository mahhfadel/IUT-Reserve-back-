import { Module } from '@nestjs/common';
import { HoraryService } from './horary.service';
import { HoraryController } from './horary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horary } from './entities/horary.entity';

@Module({

    imports: [TypeOrmModule.forFeature([Horary])],

    controllers: [HoraryController],
    providers: [HoraryService],
    exports: [HoraryService],
})
export class HoraryModule {}
