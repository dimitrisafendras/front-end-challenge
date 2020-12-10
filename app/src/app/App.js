import React from 'react';
import { Footer, Header } from '../components';
import { AppLayout } from '../components/layouts/appLayout';
import { AppsList } from '../views';

export const App = () => (
  <AppLayout>
    <Header />
    <AppsList />
    <Footer />
  </AppLayout>
);
