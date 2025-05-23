import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-12 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to the Live Stream Quiz Platform. By using this platform, you agree to the following terms and conditions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>You must be at least 18 years old to participate.</li>
        <li>Do not share your login credentials with others.</li>
        <li>Any form of cheating or manipulation will result in account suspension.</li>
        <li>Respect other users and follow community guidelines.</li>
        <li>We reserve the right to modify the terms at any time.</li>
      </ul>
      <p className="mt-6">
        If you do not agree to these terms, please do not use our platform.
      </p>
    </div>
  );
}
