import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { HoraryModule } from './horary/horary.module';
import { ReservationModule } from './reservation/reservation.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        GroupModule,
        HoraryModule,
        RoleModule,
        UserModule,
        ReservationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
