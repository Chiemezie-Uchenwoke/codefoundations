import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="z-20 relative border rounded-md overflow-hidden bg-[#1e1e1e] pt-4 md:w-[40%] max-w-[768px] border-white-dark/40">
       <button
         onClick={handleCopy}
         className="absolute top-2 right-2 text-xs md:text-[0.6rem] bg-gray-700 text-white-lite px-2 py-1 rounded-md hover:brightness-90 duration-300"
       >
        {copied ? "Copied!" : "Copy"}
      </button>
      <div className="absolute top-2 left-2 text-xs md:text-[0.6rem] text-white-lite px-2 py-1 rounded">
         {language.toUpperCase()}
      </div>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ margin: 0, padding: "1rem 0", fontSize: "0.85rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
