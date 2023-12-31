package osama.zipcode.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import osama.zipcode.project.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
