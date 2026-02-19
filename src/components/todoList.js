export const Todo = () => {
    return `
<div class="todo-list__stats">
    <section class="stats card">
        <header class="stats__header">
            <h3 class="stats__title">Estadísticas</h3>
        </header>
        <div class="stats__grid">
            <div class="stats__item">
                <span class="stats__value">4.5h</span>
                <span class="stats__label">Hoy</span>
            </div>
        <div class="stats__item">
            <span class="stats__value">8</span>
            <span class="stats__label">Pomodoros</span>
        </div>
        </div>
    </section>
</div>
<div class="todo-list__tasks">
    <section class="tasks card">
        <header class="tasks__header">
            <h3 class="tasks__title">Próximas</h3>
        </header>
        <ul class="tasks__list">
            <li class="tasks__item">
                <span class="tasks__indicator"></span>
                <span class="tasks__text">Actualizar documentación</span>
            </li>
            <li class="tasks__item">
                <span class="tasks__indicator"></span>
                <span class="tasks__text">Revisar PR #402</span>
            </li>
        </ul>
        <button class="btn btn--ghost tasks__add">
            <span class="btn__label">Agregar tarea</span>
        </button>
    </section>
</div>
    `;
};