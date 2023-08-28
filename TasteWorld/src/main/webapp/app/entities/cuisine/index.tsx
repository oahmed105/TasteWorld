import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Cuisine from './cuisine';
import CuisineDetail from './cuisine-detail';
import CuisineUpdate from './cuisine-update';
import CuisineDeleteDialog from './cuisine-delete-dialog';

const CuisineRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Cuisine />} />
    <Route path="new" element={<CuisineUpdate />} />
    <Route path=":id">
      <Route index element={<CuisineDetail />} />
      <Route path="edit" element={<CuisineUpdate />} />
      <Route path="delete" element={<CuisineDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CuisineRoutes;
