import fs from "node:fs";
import path from "node:path";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
};

export type Paginator = {
  page: number;
  itemsPerPage: number;
};

export type BlogPost = { metadata: Metadata; slug: string; content: string };

const parseFrontmatter = (file: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(file);
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const frontMatterBlock = match![1];
  const content = file.replace(frontmatterRegex, "").trim();
  const frontMatter = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  for (const line of frontMatter) {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  }

  return { metadata: metadata as Metadata, content };
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

const readMDXFile = (path: string) => {
  const content = fs.readFileSync(path, "utf-8");
  return parseFrontmatter(content);
};

const getMDXData = (
  dir: string,
  paginator: Paginator = {
    page: 1,
    itemsPerPage: 10,
  },
): BlogPost[] => {
  const files = getMDXFiles(dir);
  return files
    .slice(
      (paginator.page - 1) * paginator.itemsPerPage,
      paginator.page * paginator.itemsPerPage,
    )
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file));
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    });
};

export const getAllPosts = (paginator?: Paginator) => {
  return getMDXData(path.join(process.cwd(), "content"), paginator);
};

export const getPost = (slug: string): BlogPost => {
  const filePath = path.join("content", `${slug}.mdx`);
  const { metadata, content } = readMDXFile(filePath);
  return {
    metadata,
    slug,
    content,
  };
};
