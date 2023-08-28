package osama.zipcode.project.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import osama.zipcode.project.domain.Cuisine;

/**
 * Spring Data JPA repository for the Cuisine entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CuisineRepository extends JpaRepository<Cuisine, Long> {}
