import { useState } from "react";
import "./App.css";

function App() {
  const [firstPlayerNums, setFirstPlayerNums] = useState([0, 0, 0, 0]);
  const [firstPlayerNumsTwo, setFirstPlayerNumsTwo] = useState([0, 0, 0, 0]);
  const [modal, setResultmodal] = useState();
  const [modalClose, setResultmodalClose] = useState();
  const modalOpen = document.querySelector(".modal--menu")
  const overlay = document.querySelector(".overlay")

  const changeNumberOneOne = () => {
    const randomNumberOneOne = Math.floor(Math.random() * fon.length);
    setChangedtNumberOneOne(fon[randomNumberOneOne].rang);

    const randomNumberOneTwo = Math.floor(Math.random() * fon.length);
    setChangedtNumberOneTwo(fon[randomNumberOneTwo].rang);

    const randomNumberOneThree = Math.floor(Math.random() * fon.length);
    setChangedtNumberOneThree(fon[randomNumberOneThree].rang);

    const randomNumberOneFour = Math.floor(Math.random() * fon.length);
    setChangedtNumberOneFour(fon[randomNumberOneFour].rang);
  };

  const changeFistPlayerNums = () => {
    let arr = [];

    for (let i = 0; i < 4; i++) {
      const min = 1;
      const max = 9;

      const randomizedNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;

      arr.push(randomizedNumber);
      setFirstPlayerNums(arr);
    }

    console.log(firstPlayerNums);
    console.log(result);
  };

  const result = firstPlayerNums[0] + firstPlayerNums[1] + firstPlayerNums[2] + firstPlayerNums[3];
  const resultTwo = firstPlayerNumsTwo[0] + firstPlayerNumsTwo[1] + firstPlayerNumsTwo[2] + firstPlayerNumsTwo[3];

  const changeNumberTwoOne = () => {
    const randomNumberTwoOne = Math.floor(Math.random() * fon.length);
    setChangedtNumberTwoOne(fon[randomNumberTwoOne].rang);

    const randomNumberTwoTwo = Math.floor(Math.random() * fon.length);
    setChangedtNumberTwoTwo(fon[randomNumberTwoTwo].rang);

    const randomNumberTwoThree = Math.floor(Math.random() * fon.length);
    setChangedtNumberTwoThree(fon[randomNumberTwoThree].rang);

    const randomNumberTwoFour = Math.floor(Math.random() * fon.length);
    setChangedtNumberTwoFour(fon[randomNumberTwoFour].rang);
  };

  const changeFistPlayerNumsTwo = () => {
    let arr = [];

    for (let i = 0; i < 4; i++) {
      const min = 1;
      const max = 9;

      const randomizedNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;

      arr.push(randomizedNumber);
      setFirstPlayerNumsTwo(arr);
    }
    
    
    modalOpen.style = 'display: flex'
    overlay.style = 'display: flex'
  };

 const close = () => {
  modalOpen.style = 'display: none'
  overlay.style = 'display: none'
 }

 let cheskWinner = () =>{
  if (result>resultTwo) {
    return `Player 1`
    }
  if(result<resultTwo){
    return `Player 2`
  }
 if (result == resultTwo){
    return `Draw`
 }
 }

//  console.log(cheskWinner());


  // console.log(firstPlayerNums);

  return (
    <div className="container">
      <div className="container--one">
        <div className="playerOne">
          {firstPlayerNums.map((number) => (
            <div className={number ? `game rang` + number : "game"}>
              {number}
            </div>
          ))}
          <div className="button--items">
            <h1>Player 1</h1>
            <button onClick={changeFistPlayerNums}>START</button>
          </div>
        </div>

        <div className="playerTwo">
          {firstPlayerNumsTwo.map((number) => (
            <div className={number ? `game rang` + number : "game"}>
              {number}
            </div>
          ))}
          <div className="button--items">
            <h1>Player 2</h1>
            <button onClick={changeFistPlayerNumsTwo}>START</button>
          </div>
        </div>
      </div>



      <div className={`modal--menu ${modalClose}`}>
      <div className="player1">
          <h1>Player 1</h1>
          <div className="player1-result">{result}</div>
        </div>
        
        <div className="winner">
         <h1>🏆🏆🏆WINNER🏆🏆🏆</h1>
         <h1>🎉🎉🎉{cheskWinner()}🎉🎉🎉</h1>
         <h1>Congratulations</h1>
        </div>

        <div className="player2">
          <h1>Player 2</h1>
          <div className="player2-result">{resultTwo}</div>
        </div>
       </div>
       <div className={`overlay`}>
        <button className="close--btn" onClick={close}>X</button>
        </div>
       
    </div>
      
  );
}

export default App;
