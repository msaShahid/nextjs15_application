import Link from "next/link";

export default async function NewArticle({
  params,
  searchParams,
}: {
  params: Promise< { articleId: string }>;
  searchParams: Promise< { lang?: "en" | "fr" | "sp" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams; 

  const availableLanguages = ["en", "fr", "sp"]; 

  return (
    <div>
      <h1>News Article: {articleId}</h1>
      <p>Reading in your preferred language: {lang}</p>

      <div>
        {availableLanguages.map((language) => (
          <Link
            key={language}
            href={`/articles/${articleId}?lang=${language}`}
            className="mx-2"
          >
            {language.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
