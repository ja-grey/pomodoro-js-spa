export const Ambient = () => {
    return `
<div class="ambient__section">
    <h2 class="ambient__title">Sonido Ambiental</h2>
    <div class="ambient__sounds">
        <button class="sound-item sound-item--active">
            <span class="sound-item__icon"></span>
            <span class="sound-item__label">Lluvia</span>
        </button>
        <button class="sound-item">
            <span class="sound-item__icon"></span>
            <span class="sound-item__label">Café</span>
        </button>
        <button class="sound-item">
            <span class="sound-item__icon"></span>
            <span class="sound-item__label">Viento</span>
        </button>
        <button class="sound-item">
            <span class="sound-item__icon"></span>
            <span class="sound-item__label">Océano</span>
        </button>
    </div>

    <div class="ambient__volume">
        <label class="slider">
            <span class="slider__label">Volumen</span>
            <input 
            class="slider__input"
            type="range"
            min="0"
            max="100"
            value="45"
            >
        </label>
    </div>
</div>
    `;
};