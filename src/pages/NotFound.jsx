import Button from '../components/Button';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="container-content text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-5xl mb-6">This table isn't set.</h1>
        <p className="text-ink/65 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist. Let's get you back to the dining room.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
