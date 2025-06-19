import { useState } from "react";
import { ActionPanel, Action, Form, Detail } from "@raycast/api";
import TurndownService from "turndown";

export default function Command() {
  const [url, setUrl] = useState("");
  const [markdown, setMarkdown] = useState<string | null>(null);

  async function handleFetch() {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const turndownService = new TurndownService();
      const md = turndownService.turndown(html);
      setMarkdown(md);
    } catch (error) {
      setMarkdown(`# 错误\n${error}`);
    }
  }

  if (markdown) {
    return <Detail markdown={markdown} />;
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="获取网页内容" onSubmit={handleFetch} />
        </ActionPanel>
      }
    >
      <Form.TextField id="url" title="网页 URL" onChange={setUrl} value={url} />
    </Form>
  );
}