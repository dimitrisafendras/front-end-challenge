import React from 'react';
import { Footer, Header, AppLayout } from '../genericComponents';

import { AppsList } from '../views';

export const App = () => (
  <AppLayout>
    <Header />
    <AppsList />
    <Footer />
  </AppLayout>
);
