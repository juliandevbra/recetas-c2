import ErrorBoundary from "./ErrorBoundary";

const withErrorBoundary = (Component) => {
  return (props) => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
};
export default withErrorBoundary;
