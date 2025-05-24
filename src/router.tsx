import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlansPage from './pages/PlansPage';
import ModalitiesPage from './pages/ModalitiesPage';
import ToolsPage from './pages/ToolsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import TrialPage from './pages/TrialPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'sobre',
        element: <AboutPage />
      },
      {
        path: 'planos',
        element: <PlansPage />
      },
      {
        path: 'modalidades',
        element: <ModalitiesPage />
      },
      {
        path: 'ferramentas',
        element: <ToolsPage />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'contato',
        element: <ContactPage />
      },
      {
        path: 'experimente',
        element: <TrialPage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
