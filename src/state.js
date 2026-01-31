const state = {
    timer: {
        minutes: 25,
        seconds: 0,
        isRunning: false,
        currentMode: 'pomodoro', // 'pomodoro', 'shortBreak', 'longBreak'
        intervalsCompleted: 0
    },

    tasks: [
        // { id: 1, text: "Aprender State", completed: false }
    ],
    settings: {
        theme: 'forest', // 'forest', 'ocean', 'dark', 'sunset'
        ambientSound: 'none', // 'rain', 'waves', 'white-noise'
        isMuted: false,
        volume: 0.5
    },
    config: {
        pomodoroTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
    }
};

export default state;