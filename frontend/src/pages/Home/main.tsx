export const HomePage = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to NoteBox</h2>
      <p className="text-lg text-gray-600 mb-8">
        Your lightweight app for quick notes with search and tag categorization.
      </p>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
        <p className="text-gray-700">
          Start creating your notes and organize them with tags for easy retrieval.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
