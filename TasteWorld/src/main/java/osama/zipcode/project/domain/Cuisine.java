package osama.zipcode.project.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Cuisine.
 */
@Entity
@Table(name = "cuisine")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Cuisine implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "origin", length = 2048)
    private String origin;

    @Lob
    @Column(name = "description", length = 2048)
    private String description;

    @OneToMany(mappedBy = "cuisine")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "reviews", "cuisine", "userProfiles" }, allowSetters = true)
    private Set<Recipe> recipes = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Cuisine id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Cuisine name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return this.origin;
    }

    public Cuisine origin(String origin) {
        this.setOrigin(origin);
        return this;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDescription() {
        return this.description;
    }

    public Cuisine description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Recipe> getRecipes() {
        return this.recipes;
    }

    public void setRecipes(Set<Recipe> recipes) {
        if (this.recipes != null) {
            this.recipes.forEach(i -> i.setCuisine(null));
        }
        if (recipes != null) {
            recipes.forEach(i -> i.setCuisine(this));
        }
        this.recipes = recipes;
    }

    public Cuisine recipes(Set<Recipe> recipes) {
        this.setRecipes(recipes);
        return this;
    }

    public Cuisine addRecipe(Recipe recipe) {
        this.recipes.add(recipe);
        recipe.setCuisine(this);
        return this;
    }

    public Cuisine removeRecipe(Recipe recipe) {
        this.recipes.remove(recipe);
        recipe.setCuisine(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Cuisine)) {
            return false;
        }
        return id != null && id.equals(((Cuisine) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Cuisine{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", origin='" + getOrigin() + "'" +
            ", description='" + getDescription() + "'" +
            "}";
    }
}
