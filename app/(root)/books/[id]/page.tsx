import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import { redirect } from "next/navigation";
import BookOverview from "@/components/book-overview";
import { auth } from "@/auth";

const BookPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  //Fetch book based on id
  const bookDetails = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);

  if (!bookDetails) {
    redirect("/404");

    console.log(bookDetails);

    return (
      <>
        <BookOverview {...bookDetails} userId={session?.user?.id as string} />
      </>
    );
  }
};
export default BookPage;
