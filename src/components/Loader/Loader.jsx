import { ProgressBar } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <ProgressBar
        height="100"
        width="300"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#FFD500"
        barColor="#005BBB"
      />
    </Wrapper>
  );
};

export default Loader;
