// src/components/common/PageHead.tsx
import Head from "next/head";

type PageHeadProps = {
  title: string;
  description: string;
};

export default function PageHead({ title, description }: PageHeadProps) {
  return (
    <Head>
      <title>{title} | Seazone</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title + " | Seazone"} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Seazone" />
    </Head>
  );
}
