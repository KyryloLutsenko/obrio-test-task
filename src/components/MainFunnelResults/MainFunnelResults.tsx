import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { persistor } from '@/store/store';

const MainFunnelResults = () => {
  const mainFunnelAnswersObject = useSelector((state: RootState) => state.mainFunnel);
  const mainFunnelAnswersArray = Object.entries(mainFunnelAnswersObject);
  const router = useRouter();

  const handleReset = () => {
    localStorage.clear();
    persistor.persist();
    router.push('/');
  };

  return (
    <div>
      <h1>Results</h1>
      {mainFunnelAnswersArray.length > 0 ? (
        <ul>
          {mainFunnelAnswersArray.map(([question, answer], index) => (
            <li key={index}>
              <strong>{question}:</strong>{' '}
              {typeof answer === 'object' ? JSON.stringify(answer) : answer}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <button
        onClick={handleReset}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Reset and Go to Home
      </button>
    </div>
  );
};
export default MainFunnelResults;
