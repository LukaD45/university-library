import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import { redirect } from "next/navigation";
import BookOverview from "@/components/book-overview";
import { auth } from "@/auth";
import BookVideo from "@/components/book-video";

const BookPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  //Fetch book based on id
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);

  if (!bookDetails) redirect("/404");

  return (
    <>
      <BookOverview {...bookDetails} userId={session?.user?.id as string} />
      <div className="book-details">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>
            <BookVideo videoUrl={bookDetails.videoUrl} />
          </section>
          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>
            <div className="space-y-5 text-xl text-light-100">
              {bookDetails.summary.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        </div>
        {/* TODO: SIMILAR BOOKS*/}
      </div>
    </>
  );
};

export default BookPage;
