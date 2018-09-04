import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
// onRestartGame={() => this.restartGame()}
// onGenerateAuralUpdate={() => this.generateAuralUpdate()}
// feedback={feedback}
// guessCount={guessCount}
// onMakeGuess={guess => this.makeGuess(guess)}
// auralStatus={auralStatus}
//guesses={guesses}
export default function Game(props) {
  return (
    <div>

      <Header />

      <main role="main">
        <GuessSection />
        <StatusSection />
        <InfoSection />
      </main>
    </div>
  );
}
/*
export const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: Math.floor(Math.random() * 100) + 1
})


export default connect(mapStateToProps)(Game);
*/