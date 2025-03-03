"use client"
import Link from "next/link";
import {use} from "react";

export default function NewArticle({
  params,
  searchParams,
}: {
  params: Promise< { articleId: string }>;
  searchParams: Promise< { lang?: "en" | "fr" | "sp" }>;
}) {
  const { articleId } =  use(params);
  const { lang = "en" } = use(searchParams) ; 

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
