import http from "http";
import { IncomingMessage, ServerResponse } from "http";
import { backToMain, main } from "./views";

const { PORT = 3004 } = process.env;

const todos: string[] = [];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/submit" && req.method === "POST") {
      let data = "";
      req.on("data", (chunk: Buffer) => {
        data += chunk.toString();
      });

      req.on("end", () => {
        // todos.push(data.split("=")[1]);

        // console.log(todos);

        res.writeHead(200, {
          "Content-Type": "text/html",
        });

        res.end(backToMain);
      });
    }
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(main);
    }
  }
);
server.listen(PORT);
