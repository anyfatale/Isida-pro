import { useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  frameStyle: 'none' | 'neon' | 'matrix' | 'gold' | 'fire';
  nicknameStyle: {
    font: 'orbitron' | 'rajdhani' | 'cyber' | 'elegant';
    color: 'primary' | 'success' | 'warning' | 'destructive' | 'rainbow';
  };
  stats: {
    gamesPlayed: number;
    hoursActive: number;
    achievementsUnlocked: number;
    level: number;
  };
  joinDate: string;
  isFirstVisit: boolean;
}

const defaultProfile: UserProfile = {
  id: 'user-' + Date.now(),
  name: '',
  nickname: 'Anonymous',
  avatar: '/placeholder.svg',
  frameStyle: 'neon',
  nicknameStyle: {
    font: 'orbitron',
    color: 'primary'
  },
  stats: {
    gamesPlayed: 0,
    hoursActive: 0,
    achievementsUnlocked: 0,
    level: 1
  },
  joinDate: new Date().toISOString(),
  isFirstVisit: true
};

export const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  useEffect(() => {
    const savedProfile = localStorage.getItem('isida-profile');
    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);
        setProfile({ ...defaultProfile, ...parsedProfile });
      } catch (error) {
        console.error('Error parsing profile:', error);
        setProfile(defaultProfile);
      }
    }
  }, []);

  const updateProfile = (updates: Partial<UserProfile>) => {
    const newProfile = { ...profile, ...updates };
    setProfile(newProfile);
    localStorage.setItem('isida-profile', JSON.stringify(newProfile));
  };

  const setUserName = (name: string) => {
    updateProfile({ 
      name, 
      nickname: name || 'Anonymous',
      isFirstVisit: false 
    });
  };

  const updateStats = (statUpdates: Partial<UserProfile['stats']>) => {
    const newStats = { ...profile.stats, ...statUpdates };
    updateProfile({ stats: newStats });
  };

  return {
    profile,
    updateProfile,
    setUserName,
    updateStats,
    isFirstVisit: profile.isFirstVisit
  };
};