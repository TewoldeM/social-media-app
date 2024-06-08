'use client'
import { Add, Person, Search,Logout } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { SignOutButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { dark } from "@clerk/themes";

const TopBar = () => {
  const router = useRouter();
  // const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center gap-20  mt-6">
      <div className="relative flex flex-row">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          onClick={() => {}}
        />
      </div>

      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>

      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer items-center md:hidden">
              <Logout sx={{ color: "white", fontSize: "52px" }} />
            </div>
          </SignOutButton>
        </SignedIn>
      </div>

      <Link href="/">
      <Image src="/assets/Andrew.jpg" 
      alt="logo" 
      width={60} 
      height={60}
       className="rounded-full md:hidden"/>
      </Link>

    </div>
  );
};

export default TopBar;