import React, { useState } from 'react';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [noteId, setNoteId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the payment processing
    alert(`Processing payment for Note ID: ${noteId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="noteId">
            Note ID
          </label>
          <input
            type="text"
            id="noteId"
            value={noteId}
            onChange={(e) => setNoteId(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Checkout;
