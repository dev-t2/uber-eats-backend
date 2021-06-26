import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entity/restaurant.entity';
import { CreateRestaurantDto } from './dto/createRestaurant.dto';

@Resolver()
export class RestaurantResolver {
  @Query(() => [Restaurant])
  readRestaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);

    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
    console.log(createRestaurantDto);

    return true;
  }
}
