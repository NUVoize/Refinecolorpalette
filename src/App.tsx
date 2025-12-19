import { useState } from 'react';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  if (currentScreen === 'home') {
    return <Home onEnter={() => setCurrentScreen('dashboard')} />;
  }

  return <Dashboard onBack={() => setCurrentScreen('home')} />;
}
