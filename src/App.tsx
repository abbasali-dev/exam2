import { Skeleton, ThemeProvider } from '@mui/material'
import './App.css'
import HomePage from 'pages/HomePage'
import theme from 'utils/theme'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sidebar from 'components/organisms/Sidebar'
import TagPage from 'pages/TagPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Sidebar,
      children: [
        {
          path: "home",
          Component: HomePage
        },
        {
          path: "tags",
          Component: TagPage
        },
      ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} /></>} />
    </ThemeProvider>
  )
}

export default App
