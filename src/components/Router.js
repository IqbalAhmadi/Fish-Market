// because we are using JSX so we need to import React from react
import React from 'react'
// importing React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePicker from './StorePicker'
import App from './App'
import NotFound from './NotFound'

// Making Router component using statless functional component
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      {/* http://localhost:3000/store/123 */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

// export Router
export default Router
