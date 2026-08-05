import "./content-view.css";

export const ContentView = (content) => {
    const container = document.createElement('div');
    container.contentEditable = true;
    container.className = 'content-view';
    container.innerHTML = content;
    return container;
}