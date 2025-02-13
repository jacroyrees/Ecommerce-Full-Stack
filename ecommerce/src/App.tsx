// src/App.jsx
import React from 'react';
import  { Button}  from '@shadcn/ui';
import { Heart } from 'lucide-react';

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Button variant="primary" className="bg-blue-500 hover:bg-blue-600">
        <Heart className="mr-2" />
        Click Me
      </Button>
    </div>
  );
};

export default App;
