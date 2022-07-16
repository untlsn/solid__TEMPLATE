import { Title } from 'solid-meta';

function Home() {
  return (
    <div>
      <Title>Home</Title>
      <header class="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-2xl text-white">
        <img src="/logo.svg" class="h-40vmin animate-[20s_spin] mb-8" alt="logo" />
        <p>
          <span>Edit </span>
          <code>src/App.tsx</code>
          <span> and save to reload.</span>
        </p>
        <Link
          class="text-[#b318f0]"
          href="/about"
        >
          About
        </Link>
      </header>
    </div>
  );
}

export default Home;
