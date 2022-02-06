export default function Content() {
  return (
    <main>
      <div className="flex items-center justify-center mt-8 min-h-screen">
        <video className="z-0" autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
