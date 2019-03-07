import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
export default function configureStore(preloadedState) {

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: false
  });

  const middlewares = applyMiddleware(logger)

  const composedEnhancers = composeWithDevTools(middlewares)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

   if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}