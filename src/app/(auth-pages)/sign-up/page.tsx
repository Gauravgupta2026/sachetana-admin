import InfoSection from "./_components/info";
import SignUpForm from "./_components/signup-form";


export default function SignUpPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <div className="grid h-full w-full grid-cols-2">
        <div className="flex items-center justify-center px-16">
          <SignUpForm />
        </div>
        <InfoSection />
      </div>
    </div>
  )
}

