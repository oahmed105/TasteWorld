import { IUser } from 'app/shared/model/user.model';
import { IReview } from 'app/shared/model/review.model';
import { IRecipe } from 'app/shared/model/recipe.model';

export interface IUserProfile {
  id?: number;
  name?: string;
  internalUser?: IUser | null;
  reviews?: IReview[] | null;
  recipe?: IRecipe | null;
}

export const defaultValue: Readonly<IUserProfile> = {};
