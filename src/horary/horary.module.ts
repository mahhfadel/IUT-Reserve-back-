import { Module } from '@nestjs/common';
import { HoraryService } from './horary.service';
import { HoraryController } from './horary.controller';

@Module({
    controllers: [HoraryController],
    providers: [HoraryService],
    exports: [HoraryService],
})
export class HoraryModule {}
