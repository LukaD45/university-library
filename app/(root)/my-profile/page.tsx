import BookList from "@/components/book-list";
import { sampleBooks } from "@/app/constants";

const MyProfile = () => {
  return (
    <>
      <BookList title="Borrowed books" books={sampleBooks} />
    </>
  );
};

export default MyProfile;
