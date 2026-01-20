export default function Contact() {
  return (
    <div className="pt-20">
      <h1 className="text-xl font-medium uppercase tracking-widest mb-12 opacity-50">
        Get in Touch
      </h1>

      <div className="max-w-xl">
        <p className="text-xl mb-8">
          Interested in working together or just want to say hi?
        </p>

        <div className="space-y-4">
          <a
            href="mailto:hello@example.com"
            className="block text-3xl hover:underline decoration-1 underline-offset-8"
          >
            hello@example.com
          </a>

          <div className="flex gap-6 mt-12 text-sm uppercase tracking-wide">
            <a href="#" className="hover:underline underline-offset-4">
              GitHub
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              LinkedIn
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
