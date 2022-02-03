import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"21bc-XwkmumvsWAWQvKTShmzlcL3xoys\"",
    "mtime": "2022-02-03T12:42:45.214Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/1f241e1.js": {
    "type": "application/javascript",
    "etag": "\"35ac7-BFbPC87bxvfZcj68uGCVVb/oOt8\"",
    "mtime": "2022-02-03T12:42:45.217Z",
    "path": "../public/_nuxt/1f241e1.js"
  },
  "/_nuxt/4505b07.js": {
    "type": "application/javascript",
    "etag": "\"944-Fd14fGQ4sKGIDiHDY+PPIsqolRU\"",
    "mtime": "2022-02-03T12:42:45.217Z",
    "path": "../public/_nuxt/4505b07.js"
  },
  "/_nuxt/556693f.js": {
    "type": "application/javascript",
    "etag": "\"473-2vss/aaAZ+i/5KSA5oEZ0iH8zKo\"",
    "mtime": "2022-02-03T12:42:45.216Z",
    "path": "../public/_nuxt/556693f.js"
  },
  "/_nuxt/687fcb5.js": {
    "type": "application/javascript",
    "etag": "\"c6b6-Rr7pvU3Ozz0SMHqduwCPC/IwVOU\"",
    "mtime": "2022-02-03T12:42:45.216Z",
    "path": "../public/_nuxt/687fcb5.js"
  },
  "/_nuxt/b2f682b.js": {
    "type": "application/javascript",
    "etag": "\"78e-09kqIQMU+aCf/PQsee/qI+N1R1s\"",
    "mtime": "2022-02-03T12:42:45.216Z",
    "path": "../public/_nuxt/b2f682b.js"
  },
  "/_nuxt/c61538a.js": {
    "type": "application/javascript",
    "etag": "\"f022-cIZOiJGKI5hY6km46hRvjRx1JlQ\"",
    "mtime": "2022-02-03T12:42:45.215Z",
    "path": "../public/_nuxt/c61538a.js"
  },
  "/_nuxt/eb76f2f.js": {
    "type": "application/javascript",
    "etag": "\"1a86-1VpgOdzVXw9velvj07Mav6BAZfU\"",
    "mtime": "2022-02-03T12:42:45.215Z",
    "path": "../public/_nuxt/eb76f2f.js"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/static" + "/" + "1643892160";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
