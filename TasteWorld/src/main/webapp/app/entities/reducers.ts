import userProfile from 'app/entities/user-profile/user-profile.reducer';
import cuisine from 'app/entities/cuisine/cuisine.reducer';
import recipe from 'app/entities/recipe/recipe.reducer';
import review from 'app/entities/review/review.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  userProfile,
  cuisine,
  recipe,
  review,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
