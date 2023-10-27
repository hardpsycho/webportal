import { createRoot } from 'react-dom/client';

const rootContainer = document.getElementById('app')
if (!rootContainer) throw new Error("There is root container not exist in document")

const root = createRoot(rootContainer)

root.render(<h1>Hello, world</h1>);
