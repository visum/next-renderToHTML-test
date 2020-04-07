# Issue demo

Based on the ssr-caching demo. Adding a `getServerSideProps` hook to a page causes `renderToHTML` to send the response immediately and return null.

- Run `npm run dev` to start the server.
- Navigate to `http://localhost:3000/`
- See in the console that the rendered data is `null`, the headers were sent, and a `finish` event handler on the `req` is triggered even though we commented out the lines that send the response.

From
`packages/next/next-server/server/text-server.ts` `renderToHTMLWithComponents()`

```JavaScript
if (html && isServerProps) {
  sendPayload(res, html, 'html', {
    private: isPreviewMode,
    stateful: true, // GSSP request
  })
  return null
}
```
