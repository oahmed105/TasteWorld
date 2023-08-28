package osama.zipcode.project.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import osama.zipcode.project.domain.Recipe;

/**
 * Spring Data JPA repository for the Recipe entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {}
