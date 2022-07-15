import '$css';

function App() {
  return (
    <div>
      <header class="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white">
        <img src="/logo.svg" class="h-40vmin animate-[20s_spin] mb-8" alt="logo" />
        <p>
          <span>Edit </span>
          <code>src/App.tsx</code>
          <span> and save to reload.</span>
        </p>
        <a
          class="text-[#b318f0]"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
