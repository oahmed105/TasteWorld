import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './recipe.reducer';

export const RecipeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const recipeEntity = useAppSelector(state => state.recipe.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="recipeDetailsHeading">Recipe</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{recipeEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{recipeEntity.name}</dd>
          <dt>
            <span id="ingredients">Ingredients</span>
          </dt>
          <dd>{recipeEntity.ingredients}</dd>
          <dt>
            <span id="instructions">Instructions</span>
          </dt>
          <dd>{recipeEntity.instructions}</dd>
          <dt>Cuisine</dt>
          <dd>{recipeEntity.cuisine ? recipeEntity.cuisine.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/recipe" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/recipe/${recipeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default RecipeDetail;
