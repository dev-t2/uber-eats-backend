import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RestaurantService } from './restaurants.service';
import { Restaurant } from './entity/restaurant.entity';
import { CreateRestaurantDto } from './dto/createRestaurant.dto';

@Resolver()
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant])
  readRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.readRestaurants();
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
    console.log(createRestaurantDto);

    return true;
  }
}
