import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-12 sm:p-24">
      <div className="text-center">
        <h1 className="text-2xl font-medium">Successfully registered!</h1>
        <p>You have created a form with validation, well done!</p>
      </div>

      <Link href="/">Go Back</Link>
    </main>
  );
}
