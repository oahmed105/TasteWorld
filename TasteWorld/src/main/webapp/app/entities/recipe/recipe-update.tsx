import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICuisine } from 'app/shared/model/cuisine.model';
import { getEntities as getCuisines } from 'app/entities/cuisine/cuisine.reducer';
import { IRecipe } from 'app/shared/model/recipe.model';
import { getEntity, updateEntity, createEntity, reset } from './recipe.reducer';

export const RecipeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const cuisines = useAppSelector(state => state.cuisine.entities);
  const recipeEntity = useAppSelector(state => state.recipe.entity);
  const loading = useAppSelector(state => state.recipe.loading);
  const updating = useAppSelector(state => state.recipe.updating);
  const updateSuccess = useAppSelector(state => state.recipe.updateSuccess);

  const handleClose = () => {
    navigate('/recipe');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getCuisines({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...recipeEntity,
      ...values,
      cuisine: cuisines.find(it => it.id.toString() === values.cuisine.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...recipeEntity,
          cuisine: recipeEntity?.cuisine?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="tasteWorldApp.recipe.home.createOrEditLabel" data-cy="RecipeCreateUpdateHeading">
            Create or edit a Recipe
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="recipe-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Name" id="recipe-name" name="name" data-cy="name" type="text" />
              <ValidatedField label="Ingredients" id="recipe-ingredients" name="ingredients" data-cy="ingredients" type="text" />
              <ValidatedField label="Instructions" id="recipe-instructions" name="instructions" data-cy="instructions" type="text" />
              <ValidatedField id="recipe-cuisine" name="cuisine" data-cy="cuisine" label="Cuisine" type="select">
                <option value="" key="0" />
                {cuisines
                  ? cuisines.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/recipe" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default RecipeUpdate;
