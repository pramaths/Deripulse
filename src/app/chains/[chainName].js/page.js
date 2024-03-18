import ChainDataComponent from '../../components/ChainData';

const ChainDataPage = ({ chainName }) => {
  return (
    <div>
      <h1>Data for {chainName}</h1>
      <ChainDataComponent chainName={chainName} />
    </div>
  );
};

