import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Post()
    create(@Body() createReservationDto: CreateReservationDto) {
        return this.reservationService.create(createReservationDto);
    }

    @Get()
    findAll() {
        return this.reservationService.findAll();
    }

    @Get(':id')

    findOne(@Param() user_id: number, room_id: number, horary_id: number) {
        return this.reservationService.findOne(user_id, room_id, horary_id);
    }

    @Patch(':id')
    update(@Param() user_id: number, room_id: number, horary_id: number, @Body() updateReservationDto: UpdateReservationDto) {
        return this.reservationService.update(user_id, room_id, horary_id, updateReservationDto);
    }

    @Delete(':id')
    remove(@Param() user_id: number, room_id: number, horary_id: number) {
        return this.reservationService.remove(user_id, room_id, horary_id);

    }
}
