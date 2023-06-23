import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Cursos = React.lazy(() => import('./Pages/Cursos'))
const Temarios = React.lazy(() => import('./Pages/Temarios'))
const Mentoras = React.lazy(() => import('./Pages/Mentorías'))
const Registrodealumnos = React.lazy(() => import('./Pages/ Registro de alumnos'))
const Dashboard = React.lazy(() => import('./Pages/dashboard'))

const App: React.FunctionComponent = (props: any) => {
  const routes = [
    {
      path: '/Cursos',
      name: 'Cursos',
      component: Cursos,
    },
    {
      path: '/Temarios',
      name: 'Temarios',
      component: Temarios,
    },
    {
      path: '/Mentorías',
      name: 'Mentorías',
      component: Mentoras,
    },
    {
      path: '/ Registro de alumnos',
      name: ' Registro de alumnos',
      component: Registrodealumnos,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
  ]

  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />
      })}
    </Switch>
  )

  return (
    <React.Fragment>
      <React.Suspense fallback={<span>Loading</span>}>
        <React.Fragment>{switchRoutes}</React.Fragment>
      </React.Suspense>
    </React.Fragment>
  )
}

export default App
