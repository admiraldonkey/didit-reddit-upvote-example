"use client";

export default function GlobalError({ error, reset }) {
  function handleClick() {
    reset();
    window.location.reload();
  }
  return (
    <html className="flex h-full justify-center items-center">
      <body className="flex flex-col justify-center">
        <h2 className="text-6xl font-bold">You done messed up!</h2>
        <p className="text-4xl py-10 text-red-500 font-semibold">
          {error.message}
        </p>
        <button onClick={handleClick} className="text-2xl">
          Go Back
        </button>
      </body>
    </html>
  );
}
