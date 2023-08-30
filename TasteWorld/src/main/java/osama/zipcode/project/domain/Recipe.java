package osama.zipcode.project.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Recipe.
 */
@Entity
@Table(name = "recipe")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Recipe implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "ingredients")
    private String ingredients;

    @Lob
    @Column(name = "instructions")
    private String instructions;

    @OneToMany(mappedBy = "recipe")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "userProfile", "recipe" }, allowSetters = true)
    private Set<Review> reviews = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = { "recipes" }, allowSetters = true)
    private Cuisine cuisine;

    @OneToMany(mappedBy = "recipe")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "internalUser", "reviews", "recipe" }, allowSetters = true)
    private Set<UserProfile> userProfiles = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Recipe id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Recipe name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIngredients() {
        return this.ingredients;
    }

    public Recipe ingredients(String ingredients) {
        this.setIngredients(ingredients);
        return this;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getInstructions() {
        return this.instructions;
    }

    public Recipe instructions(String instructions) {
        this.setInstructions(instructions);
        return this;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public Set<Review> getReviews() {
        return this.reviews;
    }

    public void setReviews(Set<Review> reviews) {
        if (this.reviews != null) {
            this.reviews.forEach(i -> i.setRecipe(null));
        }
        if (reviews != null) {
            reviews.forEach(i -> i.setRecipe(this));
        }
        this.reviews = reviews;
    }

    public Recipe reviews(Set<Review> reviews) {
        this.setReviews(reviews);
        return this;
    }

    public Recipe addReview(Review review) {
        this.reviews.add(review);
        review.setRecipe(this);
        return this;
    }

    public Recipe removeReview(Review review) {
        this.reviews.remove(review);
        review.setRecipe(null);
        return this;
    }

    public Cuisine getCuisine() {
        return this.cuisine;
    }

    public void setCuisine(Cuisine cuisine) {
        this.cuisine = cuisine;
    }

    public Recipe cuisine(Cuisine cuisine) {
        this.setCuisine(cuisine);
        return this;
    }

    public Set<UserProfile> getUserProfiles() {
        return this.userProfiles;
    }

    public void setUserProfiles(Set<UserProfile> userProfiles) {
        if (this.userProfiles != null) {
            this.userProfiles.forEach(i -> i.setRecipe(null));
        }
        if (userProfiles != null) {
            userProfiles.forEach(i -> i.setRecipe(this));
        }
        this.userProfiles = userProfiles;
    }

    public Recipe userProfiles(Set<UserProfile> userProfiles) {
        this.setUserProfiles(userProfiles);
        return this;
    }

    public Recipe addUserProfile(UserProfile userProfile) {
        this.userProfiles.add(userProfile);
        userProfile.setRecipe(this);
        return this;
    }

    public Recipe removeUserProfile(UserProfile userProfile) {
        this.userProfiles.remove(userProfile);
        userProfile.setRecipe(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Recipe)) {
            return false;
        }
        return id != null && id.equals(((Recipe) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Recipe{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", ingredients='" + getIngredients() + "'" +
            ", instructions='" + getInstructions() + "'" +
            "}";
    }
}
