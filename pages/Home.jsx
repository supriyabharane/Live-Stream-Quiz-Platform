
import Header from '/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6 text-center mt-12">
        <h2 className="text-3xl font-semibold mb-4">Test Your Knowledge Live!</h2>
        <p className="text-gray-700 text-lg">
          Join real-time quizzes and win exciting rewards.
        </p>
      </main>
    </>
  );
}


