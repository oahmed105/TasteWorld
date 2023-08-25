package osama.zipcode.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import osama.zipcode.test.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
