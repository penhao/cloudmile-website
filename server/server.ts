import express, {Request, Response} from "express";
import next from "next";
import {redirects} from "./redirect";
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await app.prepare();
        const server = express();
        redirects.forEach(({from, to}) => {
            server.get(from, (req, res) => {
                res.redirect(301, to);
            })
        });
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on server:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();