import Link from "next/link";

export default async function NewArticle({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: "en" | "fr" | "sp" };
}) {
  const { articleId } = params;
  const { lang = "en" } = searchParams; 

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
