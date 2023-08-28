import { IReview } from 'app/shared/model/review.model';
import { ICuisine } from 'app/shared/model/cuisine.model';
import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IRecipe {
  id?: number;
  name?: string | null;
  ingredients?: string | null;
  instructions?: string | null;
  reviews?: IReview[] | null;
  cuisine?: ICuisine | null;
  userProfiles?: IUserProfile[] | null;
}

export const defaultValue: Readonly<IRecipe> = {};
