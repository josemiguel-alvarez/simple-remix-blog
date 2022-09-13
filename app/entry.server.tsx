import type { EntryContext, HandleDataRequestFunction } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { otherRootRouteHandlers } from "./utils/otherRootRoutes.server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  for (const handler of otherRootRouteHandlers) {
    const otherRouteResponse = await handler(request, remixContext);
    if (otherRouteResponse) return otherRouteResponse;
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");
  if (process.env.NODE_ENV !== "development") {
    responseHeaders.set("Cache-Control", "max-age=300, s-maxage=31556952");
  }

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

export const handleDataRequest: HandleDataRequestFunction = (
  response: Response
) => {
  if (process.env.NODE_ENV !== "development") {
    response.headers.set("Cache-Control", "max-age=300, s-maxage=31556952");
  }
  return response;
};
