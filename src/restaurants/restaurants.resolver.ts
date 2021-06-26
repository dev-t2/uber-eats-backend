import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entity/restaurant.entity';

@Resolver()
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);

    return [];
  }
}
