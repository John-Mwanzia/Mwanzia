import React from 'react';
import { Loader } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';

export default function SendButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        type="submit"
        disabled={pending}
        className="bg-primary float-right mb-6 mt-3  rounded-xl hover:bg-purple-900 p-2 pl-4 pr-4 font-semibold  shadow-md"
      >
        {pending ? (
          //    center the loader
          <div className="flex items-center justify-center">
            <Loader className="z-50 h-6 w-6 animate-spin text-white" />
          </div>
        ) : (
          <span className="font-sans_bold text-base font-bold">Submit</span>
        )}
      </Button>
    </div>
  );
}
