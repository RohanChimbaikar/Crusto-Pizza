import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <LinkButton to={-1}>&larr; Go back</LinkButton>
      <p>
        {error.data} || {error.message}
      </p>
    </div>
  );
}

export default NotFound;
