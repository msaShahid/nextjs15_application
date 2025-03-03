import Link from "next/link";

export default function Articles() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Articles</h1>
          <div className="text-center">
            <Link href="/articles/bk-news-12?lang=en" className="mr-4">Read in English</Link>
            <Link href="/articles/bk-news-12?lang=fr" className="mr-4">Read in French</Link>
            <Link href="/articles/bk-news-12?lang=sp" className="mr-4">Read in Spanish</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
