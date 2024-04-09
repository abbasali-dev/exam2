import { Skeleton, ThemeProvider } from '@mui/material'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import Sidebar from 'components/organisms/Sidebar'
import TagPage from 'pages/TagPage'
import theme from 'utils/theme'

import './App.css'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Sidebar />}>
        <Route index element={<Navigate replace to='home' />} />
        <Route path='home' element={<HomePage />} />
        <Route path='tags' element={<TagPage />} />
      </Route>
    )
  )

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider
        router={router}
        fallbackElement={
          <>
            <Skeleton />
            <Skeleton animation='wave' />
            <Skeleton animation={false} />
          </>
        }
      />
    </ThemeProvider>
  )
}

export default App
