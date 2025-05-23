


export default function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>This is your dashboard.</p>
      {/* Here you can add links to live streams, quiz, wallet, etc. */}
    </div>
  );
}

