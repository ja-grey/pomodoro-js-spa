export const Timer = () => {
    return `
<div class="timer__modes">
    <button class="timer__mode timer__mode--active">
        Pomodoro
    </button>

    <button class="timer__mode">
        Descanso Corto
    </button>

    <button class="timer__mode">
        Descanso Largo
    </button>
</div>

<div class="timer__circle">
    <svg class="timer__svg" viewBox="0 0 100 100">
        <circle class="timer__ring timer__ring--background"
        cx="50" cy="50" r="45" />
        <circle class="timer__ring timer__ring--progress timer__ring--focus"
        cx="50" cy="50" r="45" />
    </svg>

    <div class="timer__center">
        <span class="timer__time">25:00</span>
        <span class="timer__label">ENFOQUE TOTAL</span>
    </div>
</div>

<div class="timer__controls">
    <button class="icon-btn timer__control">
        <span class="icon-btn__icon"></span>
    </button>

    <button class="btn btn--primary timer__start">
        <span class="btn__label">Iniciar</span>
    </button>

    <button class="icon-btn timer__control">
        <span class="icon-btn__icon"></span>
    </button>
</div>
    `;
};