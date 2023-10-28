import ChainDataComponent from '../../components/ChainData';

const ChainDataPage = ({ chainName }) => {
  return (
    <div>
      <h1>Data for {chainName}</h1>
      <ChainDataComponent chainName={chainName} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { chainName } = context.params;

  return {
    props: {
      chainName
    }
  };
}

export default ChainDataPage;
