import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewBookPage = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books" className="text-white">
          Go Back
        </Link>
      </Button>

      <section className="w-full max-w-2xl">
        <p>Book Form</p>
      </section>
    </>
  );
};

export default NewBookPage;
