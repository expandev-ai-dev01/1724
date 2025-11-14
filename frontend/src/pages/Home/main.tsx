export const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to NoteBox</h1>
        <p className="text-lg text-gray-600 mb-8">Quick notes application</p>
        <div className="space-y-4">
          <p className="text-gray-500">Start creating your notes</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
