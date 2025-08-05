import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex justify-center pt-10 min-h-screen bg-gray-100 dark:bg-gray-900">
      <SignIn />
    </div>
  );
}
