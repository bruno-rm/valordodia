import  SignupForm from "@/app/components/signup-form";
import { Suspense } from "react";

export default function Signup() {
  return (
    <main className="flex items-center justify-center p-15 bg-black h-90">      
        
        <Suspense>
          <SignupForm />
          
        </Suspense>
      
    </main>
  );
}


