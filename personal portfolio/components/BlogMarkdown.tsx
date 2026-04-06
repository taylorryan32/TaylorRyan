import Link from "next/link";
import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export function BlogMarkdown({ content }: Props) {
  return (
    <div className="markdown-body max-w-none text-neutral-700 leading-relaxed space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_p]:text-base [&_strong]:text-brand-dark [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1 [&_a]:text-brand [&_a]:font-semibold [&_a]:underline-offset-2 hover:[&_a]:underline">
      <ReactMarkdown
        components={{
          a: ({ href, children, ...props }) => {
            if (href?.startsWith("/")) {
              return (
                <Link href={href} {...props}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
