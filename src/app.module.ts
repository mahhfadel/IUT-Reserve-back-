import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { GroupModule } from './group/group.module';
import { HoraryModule } from './horary/horary.module';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            expandVariables: true,
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
