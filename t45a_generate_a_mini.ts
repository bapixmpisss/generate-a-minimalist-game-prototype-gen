// t45a_generate_a_mini.ts

// Game Prototype Generator Config
interface GameConfig {
  title: string;
  genre: 'adventure' | 'puzzle' | 'platformer';
  theme: 'space' | 'fantasy' | 'modern';
  gameplayMechanics: ('platforming' | 'problemSolving' | 'exploration')[];
  numLevels: number;
}

// Game Prototype Generator Function
function generateGamePrototype(config: GameConfig): GamePrototype {
  const gamePrototype: GamePrototype = {
    title: config.title,
    genre: config.genre,
    theme: config.theme,
    gameplayMechanics: config.gameplayMechanics,
    numLevels: config.numLevels,
    levels: [],
  };

  // Generate Levels
  for (let i = 0; i < config.numLevels; i++) {
    const level: Level = {
      id: `level-${i + 1}`,
      description: `Level ${i + 1} - ${config.theme}`,
      objectives: [],
    };

    // Add Objectives based on Gameplay Mechanics
    if (config.gameplayMechanics.includes('platforming')) {
      level.objectives.push({
        type: 'platforming',
        description: 'Reach the end of the level',
      });
    }

    if (config.gameplayMechanics.includes('problemSolving')) {
      level.objectives.push({
        type: 'problemSolving',
        description: 'Solve the puzzle to unlock the door',
      });
    }

    if (config.gameplayMechanics.includes('exploration')) {
      level.objectives.push({
        type: 'exploration',
        description: 'Find all the hidden secrets',
      });
    }

    gamePrototype.levels.push(level);
  }

  return gamePrototype;
}

// Game Prototype Interface
interface GamePrototype {
  title: string;
  genre: string;
  theme: string;
  gameplayMechanics: string[];
  numLevels: number;
  levels: Level[];
}

// Level Interface
interface Level {
  id: string;
  description: string;
  objectives: Objective[];
}

// Objective Interface
interface Objective {
  type: string;
  description: string;
}

// Example Usage
const myGameConfig: GameConfig = {
  title: 'Space Expedition',
  genre: 'adventure',
  theme: 'space',
  gameplayMechanics: ['exploration', 'problemSolving'],
  numLevels: 5,
};

const myGamePrototype = generateGamePrototype(myGameConfig);
console.log(myGamePrototype);