import { IUserProfile } from 'app/shared/model/user-profile.model';
import { IRecipe } from 'app/shared/model/recipe.model';

export interface IReview {
  id?: number;
  rating?: number;
  comment?: string | null;
  userProfile?: IUserProfile | null;
  recipe?: IRecipe | null;
}

export const defaultValue: Readonly<IReview> = {};
