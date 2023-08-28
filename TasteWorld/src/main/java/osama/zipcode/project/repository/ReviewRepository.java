package osama.zipcode.project.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import osama.zipcode.project.domain.Review;

/**
 * Spring Data JPA repository for the Review entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {}
