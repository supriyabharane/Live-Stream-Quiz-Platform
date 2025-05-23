

<form onSubmit={handleLogin}>
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={e => setUsername(e.target.value)}
    required
    style={{ width: '100%', padding: 8, marginBottom: 12, boxSizing: 'border-box' }}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={e => setPassword(e.target.value)}
    required
    style={{ width: '100%', padding: 8, marginBottom: 12, boxSizing: 'border-box' }}
  />
  <button
    type="submit"
    style={{
      width: '100%',
      padding: 10,
      backgroundColor: 'lightgreen',
      border: 'none',
      borderRadius: 5,
      fontWeight: 'bold',
      cursor: 'pointer',
    }}
  >
    Login
  </button>

  {/* 📌 Add this line below the button */}
  <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: 12 }}>
    By logging in, you accept our <a href="/terms" target="_blank">Terms & Conditions</a>.
  </p>
</form>
