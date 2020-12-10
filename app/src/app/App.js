import React from 'react';
import { Footer, Header, AppLayout } from '../components';

import { AppsList } from '../views';

export const App = () => (
  <AppLayout>
    <Header />
    <AppsList />
    <Footer />
  </AppLayout>
);
