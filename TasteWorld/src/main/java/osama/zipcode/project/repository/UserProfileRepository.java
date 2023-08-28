package osama.zipcode.project.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import osama.zipcode.project.domain.UserProfile;

/**
 * Spring Data JPA repository for the UserProfile entity.
 */
@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    default Optional<UserProfile> findOneWithEagerRelationships(Long id) {
        return this.findOneWithToOneRelationships(id);
    }

    default List<UserProfile> findAllWithEagerRelationships() {
        return this.findAllWithToOneRelationships();
    }

    default Page<UserProfile> findAllWithEagerRelationships(Pageable pageable) {
        return this.findAllWithToOneRelationships(pageable);
    }

    @Query(
        value = "select distinct userProfile from UserProfile userProfile left join fetch userProfile.internalUser",
        countQuery = "select count(distinct userProfile) from UserProfile userProfile"
    )
    Page<UserProfile> findAllWithToOneRelationships(Pageable pageable);

    @Query("select distinct userProfile from UserProfile userProfile left join fetch userProfile.internalUser")
    List<UserProfile> findAllWithToOneRelationships();

    @Query("select userProfile from UserProfile userProfile left join fetch userProfile.internalUser where userProfile.id =:id")
    Optional<UserProfile> findOneWithToOneRelationships(@Param("id") Long id);
}
