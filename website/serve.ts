import * as Denoot from "../mod.ts";

const { default: views } = await import("./build.ts");

const app = Denoot.app(3000, "0.0.0.0", ({ localhostURL }) => console.log(localhostURL));

app.static("/static", {
    folder: "website/assets",
    autoIndex: true
})


console.log(views)

for (const view of views) {

    app.get(view.url, (req: Denoot.Request, res: Denoot.Response) => {

        return res.sendFile(view.htmlFilePath);
    
    });

}