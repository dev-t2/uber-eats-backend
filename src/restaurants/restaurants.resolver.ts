import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entity/restaurant.entity';

@Resolver()
export class RestaurantResolver {
  @Query(() => Restaurant)
  restaurant(): Restaurant {
    return { name: '', isGood: true };
  }
}
