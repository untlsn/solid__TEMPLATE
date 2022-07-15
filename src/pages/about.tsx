function About() {
  return (
    <div>
      <header class="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white">
        <img src="/logo.svg" class="h-40vmin animate-[20s_spin] mb-8" alt="logo" />
        <p>
          Hello from about!
        </p>
        <Link
          class="text-[#b318f0]"
          href="/"
        >
          Home
        </Link>
      </header>
    </div>
  );
}

export default About;
