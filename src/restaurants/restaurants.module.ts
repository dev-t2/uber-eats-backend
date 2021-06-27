import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Restaurant } from './entity/restaurant.entity';
import { RestaurantService } from './restaurants.service';
import { RestaurantResolver } from './restaurants.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantsModule {}
