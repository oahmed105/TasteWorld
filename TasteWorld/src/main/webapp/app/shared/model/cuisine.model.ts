import { IRecipe } from 'app/shared/model/recipe.model';

export interface ICuisine {
  id?: number;
  name?: string | null;
  origin?: string | null;
  description?: string | null;
  recipes?: IRecipe[] | null;
}

export const defaultValue: Readonly<ICuisine> = {};
