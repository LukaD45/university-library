import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import BookList from "@/components/book-list";
import { sampleBooks } from "@/app/constants";

const MyProfile = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      <BookList title="Borrowed books" books={sampleBooks} />
    </>
  );
};

export default MyProfile;
