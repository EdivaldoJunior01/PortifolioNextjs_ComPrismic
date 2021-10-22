import { Container, SpinnerContainer} from './styles';

function LoadingScreen() {
  return (
    <Container>
        <SpinnerContainer>
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </SpinnerContainer>
    </Container>
  );
};

export default LoadingScreen;
