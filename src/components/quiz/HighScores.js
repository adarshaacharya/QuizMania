import React, { useEffect, useState } from "react";
import { useFirebase } from "../firebase/FirebaseContext";
import  { Spinner} from '../../@quiz-ui'


const HighScores = () => {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.scores().once("value", (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  const formatScoreData = (firebaseScores) => {
    const scores = [];

    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val["key"] = key;
      scores.push(val);
    }

    return scores
      .sort((score1, score2) => score2.score - score1.score)
      .slice(0, 10);
  };

  if (loading) return <Spinner />;

  return (
    <>
      <h1>High Scores</h1>
      <div id="highestScorerList">
        {scores.map((record) => (
          <li key={record.key} className="high-score">
            {record.name} - {record.score}
          </li>
        ))}
      </div>
    </>
  );
};

export default HighScores;
