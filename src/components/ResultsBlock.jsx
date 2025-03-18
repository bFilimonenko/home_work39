import './ResultsBlock.css'
export const ResultsBlock = ({ winners }) => { //stateless component
  let place = 1;

  return (
    <>
      {winners.length < 1 ?
        <p>There are no winners yet</p> :
        winners.map(smile => <div className={'result-place-block'}><p>{place++}</p><h2>{smile.content}</h2></div>)}
    </>
  );
};