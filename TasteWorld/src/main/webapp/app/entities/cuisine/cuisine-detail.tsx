import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './cuisine.reducer';

export const CuisineDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cuisineEntity = useAppSelector(state => state.cuisine.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cuisineDetailsHeading">Cuisine</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cuisineEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{cuisineEntity.name}</dd>
          <dt>
            <span id="origin">Origin</span>
          </dt>
          <dd>{cuisineEntity.origin}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{cuisineEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/cuisine" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/cuisine/${cuisineEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CuisineDetail;
