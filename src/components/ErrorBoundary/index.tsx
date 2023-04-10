import { ErrorInfo, ReactNode, Component } from 'react';

import { Container } from './styles';

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  public static componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // logErrorToMyService(error, errorInfo);
    console.log('ERROR!', error, errorInfo); // eslint-disable-line
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (!hasError) return children;

    return (
      <Container>
        <h2>Ocorreu um erro!</h2>

        <p>Tente novamente</p>
      </Container>
    );
  }
}

export default ErrorBoundary;
