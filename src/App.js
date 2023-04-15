import { useEffect, useState, useMemo } from 'react';
import './App.css';
import QueAns from './Components/QueAns'
import Timer from './Components/Timer';
import Start from './Components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: 'Which is a type of Electrically-Erasable Programmable Read-Only Memory ? ',
      answer: [
        {
          text: 'Flash',
          correct: true
        },
        {
          text: 'Flange',
          correct: false
        },
        {
          text: 'Fury',
          correct: false
        },
        {
          text: 'FRAM',
          correct: false
        },
      ]
    },
    {
      id: 2,
      question: `.'MPG' extension refers usually to what kind of file ?`,
      answer: [
        {
          text: 'WordPerfect Document file',
          correct: false
        },
        {
          text: 'MS Office document',
          correct: false
        },
        {
          text: 'Animation/movie file',
          correct: true
        },
        {
          text: 'Image file',
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: 'Who developed Yahoo ?',
      answer: [
        {
          text: 'Dennis Ritchie & Ken Thompson',
          correct: false
        },
        {
          text: ' David Filo & Jerry Yang',
          correct: true
        },
        {
          text: 'Vint Cerf & Robert Kahn',
          correct: false
        },
        {
          text: 'Steve Case & Jeff Bezos',
          correct: false
        }
      ]
    },
    {
      id: 4,
      question: 'Press Council of India is a ?',
      answer: [
        {
          text: 'The statutory quasi-judicial body',
          correct: true
        },
        {
          text: 'Profitable organization',
          correct: false
        },
        {
          text: 'The constitutional quasi-judicial body',
          correct: false
        },
        {
          text: 'None of these.',
          correct: false
        }
      ]
    },
    {
      id: 5,
      question: 'Who among the following decides if an individual Bill is a Money Bill or not?',
      answer: [
        {
          text: 'Prime Minister',
          correct: false
        },
        {
          text: 'President',
          correct: false
        },
        {
          text: 'Member of Lok Sabha',
          correct: false
        },
        {
          text: 'Speaker of Lok Sabha',
          correct: true
        }
      ]
    },
    {
      id: 6,
      question: ` "Rashtriya Swasthya Bima Yojana" Launched under Social Security Act 2008 Involves
      ?`,
      answer: [
        {
          text: 'Only rural workers ',
          correct: false
        },
        {
          text: 'Only social workers',
          correct: false
        },
        {
          text: 'Only Unorganized sector workers',
          correct: true
        },
        {
          text: ' All of the above',
          correct: false
        }
      ]
    },
    {
      id: 7,
      question: 'Which of the following are called "Key Industrial animals ?',
      answer: [
        {
          text: 'Producers',
          correct: false
        },
        {
          text: 'Tertiary consumers',
          correct: false
        },
        {
          text: 'Primary consumers',
          correct: true
        },
        {
          text: 'None of these',
          correct: false
        }
      ]
    },
    {
      id: 8,
      question: `Which of the following Himalayan regions is called "Shivalik's"?`,
      answer: [
        {
          text: 'Upper Himalayas',
          correct: false
        },
        {
          text: 'Lower Himalayas',
          correct: false
        },
        {
          text: 'Outer Himalayas',
          correct: true
        },
        {
          text: 'Inner Himalayas',
          correct: false
        }
      ]
    },
    {
      id: 9,
      question: 'Forming of Association in India is ?',
      answer: [
        {
          text: 'Legal Right',
          correct: false
        },
        {
          text: 'Illegal Right',
          correct: false
        },
        {
          text: 'Natural Right',
          correct: false
        },
        {
          text: 'Fundamental Right.',
          correct: true
        }
      ]
    },
    {
      id: 10,
      question: 'The Samkhya School of Philosophy was founded by ?',
      answer: [
        {
          text: 'Gautam Buddha',
          correct: false
        },
        {
          text: 'Mahipala',
          correct: false
        },
        {
          text: 'Gopala',
          correct: false
        },
        {
          text: 'Kapila',
          correct: true
        }
      ]
    },
    {
      id: 11,
      question: 'Which of the given compounds is used to make fireproof clothing?',
      answer: [
        {
          text: 'Aluminum chloride',
          correct: false
        },
        {
          text: 'Aluminum Sulphate',
          correct: true
        },
        {
          text: 'Magnesium Chloride',
          correct: false
        },
        {
          text: 'Magnesium Sulphate',
          correct: false
        }
      ]
    },
    {
      id: 12,
      question: ' The driving force of an ecosystem is ?',
      answer: [
        {
          text: 'Carbon Mono oxide',
          correct: false
        },
        {
          text: 'Carbon dioxide',
          correct: false
        },
        {
          text: 'Biogas',
          correct: false
        },
        {
          text: 'Solar Energy',
          correct: true
        }
      ]
    },
    {
      id: 13,
      question: 'The term "Samantas" is usually seen in the medieval history of India about ?',
      answer: [
        {
          text: 'Artists',
          correct: false
        },
        {
          text: 'Big Landlords',
          correct: true
        },
        {
          text: 'Servants',
          correct: false
        },
        {
          text: 'Queens',
          correct: false
        }
      ]
    },
    {
      id: 14,
      question: `Which of the given coins was known as 'Karshapana' in ancient literature?`,
      answer: [
        {
          text: 'Gold coins',
          correct: false
        },
        {
          text: 'Bronze coins',
          correct: false
        },
        {
          text: 'Punch marked coins',
          correct: true
        },
        {
          text: 'Iron coins',
          correct: false
        }
      ]
    },
    {
      id: 15,
      question: ' Which of the given vitamin is a water-soluble vitamin?',
      answer: [
        {
          text: 'Vitamin B',
          correct: true
        },
        {
          text: 'Vitamin D',
          correct: false
        },
        {
          text: 'Vitamin A',
          correct: false
        },
        {
          text: 'Vitamin K',
          correct: false
        }
      ]
    }
  ]

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: '$ 100' },
      { id: 2, amount: '$ 200' },
      { id: 3, amount: '$ 300' },
      { id: 4, amount: '$ 400' },
      { id: 5, amount: '$ 500' },
      { id: 6, amount: '$ 1000' },
      { id: 7, amount: '$ 2000' },
      { id: 8, amount: '$ 4000' },
      { id: 9, amount: '$ 8000' },
      { id: 10, amount: '$ 16000' },
      { id: 11, amount: '$ 32000' },
      { id: 12, amount: '$ 64000' },
      { id: 13, amount: '$ 125000' },
      { id: 14, amount: '$ 250000' },
      { id: 15, amount: '$ 500000' },
    ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])

  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
            {stop ? (<h1 className='earned'>You Earned : {earned}</h1>) : (
              <>
                <div className='top'>
                  <div className='timer'><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>
                <div className='bottom'>
                  <QueAns data={data} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} setStop={setStop} />
                </div>
              </>
            )}
          </div>
          <div className="money">
            <ul className='moneyList'>
              {moneyPyramid.map(ele => (
                <li className={questionNumber === ele.id ? 'moneyListItem active' : 'moneyListItem'}>
                  <span className='moneyListItemNumber'>{ele.id}</span>
                  <span className='moneyListItemAmount'>{ele.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>) : (<Start setUsername={setUsername} />)}

    </div>
  );
}

export default App;
