import React, {useState }from 'react';
import '../styles/index.scss';

const shuffle = (array) =>{
    let counter = array.length, temp, index;

    while (counter > 0) {

        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
const user = "Udhayakumar";

const array = [{value: 1, color:"#6F98A8"},{value: 2, color:"#2B8EAD"},{value: 3, color:"#333333"},
{value: 4, color:"#2B8EAD"},{value: 5, color:"#333333"},{value: 6, color:"#BFBFBF"},
{value: 7, color:"#BFBFBF"},{value: 8, color:"#6F98A8"},{value: 9, color:"#333333"}
];


const data = shuffle(array);
const Board = (props) =>{
    const [boardData, setBoardData] = useState(data);

    const shuffleBoard = ()=>{
        let data = shuffle(boardData);
        setBoardData(data =>([...data]));
        
    }

    const sortBoard = ()=>{
        let data = boardData.sort((a,b)=>{
            if (a.value > b.value) return 1;
            if (b.value > a.value) return -1;
            return 0;
        }) 
        setBoardData(data =>([...data]));
    }
    return(
        <div className="board-container">
            <div className="header">
                Shuffle and Sort
            </div>
            <div className="content">
                <div className="board"> 
                { boardData.map((value, index) =>{
                    return <div className="box-container">
                            <div className="board-box">
                            {value.value}
                            </div>
                            <div className="left-bar" style={{backgroundColor: value.color}}>
                                <label>{value.value}</label>
                            </div>
                        </div>
                    })
                 }
               </div>
               <div className="button-container">
                   <button className="button" onClick={shuffleBoard}>Shuffle</button>
                   <button className="button" onClick={sortBoard}>Sort</button>
               </div>
        </div>
        <div className="bottom-container">
            <label>Shuffle and sort by {user}</label>
        </div>
        </div>
    )
}

export default Board;