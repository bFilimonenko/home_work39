import './ResultsBlock.css'
export const ResultsBlock = ({ winners }) => {
  let place = 1;

  console.log(winners);
  return (
    <>
      {winners.length < 1 ?
        <p>There are no winners yet</p> :
        winners.map(smile => <div className={'result-place-block'}><p>{place++}</p><h2>{smile.content}</h2></div>)}
    </>
  );
};