import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import './error.css'

function ErrorPage() {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className="error-page">
      <h1>Уупс!</h1>
      <h4>Извините, произошла непредвиденная ошибка</h4>
      <p>
        <i>{`${error.statusText}`}</i>
      </p>
    </div>
  )
}

export default ErrorPage