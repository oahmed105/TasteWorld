import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IRecipe } from 'app/shared/model/recipe.model';
import { getEntities } from './recipe.reducer';

export const Recipe = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const recipeList = useAppSelector(state => state.recipe.entities);
  const loading = useAppSelector(state => state.recipe.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="recipe-heading" data-cy="RecipeHeading">
        Recipes
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh list
          </Button>
          <Link to="/recipe/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create a new Recipe
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {recipeList && recipeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Ingredients</th>
                <th>Instructions</th>
                <th>Cuisine</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {recipeList.map((recipe, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/recipe/${recipe.id}`} color="link" size="sm">
                      {recipe.id}
                    </Button>
                  </td>
                  <td>{recipe.name}</td>
                  <td>{recipe.ingredients}</td>
                  <td>{recipe.instructions}</td>
                  <td>{recipe.cuisine ? <Link to={`/cuisine/${recipe.cuisine.id}`}>{recipe.cuisine.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/recipe/${recipe.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`/recipe/${recipe.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`/recipe/${recipe.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Recipes found</div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
