import React from 'react';
import { Link } from 'react-router-dom';

function Notes() {
  // Sample notes data (you can replace this with fetched data later)
  const notes = [
    { id: 1, title: 'Government Job Preparation Notes 1', price: '₹200' },
    { id: 2, title: 'Government Job Preparation Notes 2', price: '₹300' },
    { id: 3, title: 'Government Job Preparation Notes 3', price: '₹250' },
    { id: 4, title: 'Government Job Preparation Notes 1', price: '₹200' },
    { id: 5, title: 'Government Job Preparation Notes 2', price: '₹300' },
    { id: 6, title: 'Government Job Preparation Notes 3', price: '₹250' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <div key={note.id} className="border rounded-lg p-4 bg-white shadow-md">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-lg mt-2">{note.price}</p>
            {/* Use Link without <a> */}
            <Link to={`/checkout?noteId=${note.id}`} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
