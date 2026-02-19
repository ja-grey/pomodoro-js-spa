import state from './state.js';
import {HomeView} from './views/homeView.js';

function renderTimer() {
    
}
function renderTodo() {
    
}
function renderWeather() {

}
function renderAmbient() {
    
}
function render() {
    document.getElementById("app").innerHTML = HomeView()
    renderTimer()
    renderTodo()
    renderWeather()
    renderAmbient()
}
render()