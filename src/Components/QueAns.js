import React, { useEffect, useState } from 'react'

function QueAns({data, questionNumber, setQuestionNumber, setStop}) {

  const [question, setQuestion]= useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState('option')

  useEffect(()=>{
    setQuestion(data[questionNumber-1])
  }, [data, questionNumber]);

  const delay = (duration, callback)=>{
    setTimeout(() =>{
   callback();
    }, duration)
  };

  const handleClick = (a)=>{
    setSelectAnswer(a);
    setClassName('option active');

    delay(3000, () =>
    setClassName(a.correct ? 'option correct': 'option wrong') 
    );
    
    delay(6000, () =>{
      if(a.correct){
        setQuestionNumber((prev) => prev + 1);
        setSelectAnswer(null);
      }else{
        setStop(true);
      }
    });
  }

  return (
    <div className='que-ans'>
      <div className='question'>{question?.question}</div>
      <div className='answer'>
        {question?.answer.map((a)=> (  
        <div className={selectAnswer === a ? className:'option'} onClick={()=> handleClick(a)}>{a.text}</div>
        ))}
      </div>
    </div>
  )
}

export default QueAns
