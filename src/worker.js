export default {
  async email(message, env, ctx) {
    console.log("hi")
    if (message.to.toLowerCase() !== "inquiries@norowa.dev") return message.setReject("Unknown Address");
    console.log("bye")

    await fetch("https://discord.com/api/webhooks/1256705647765094471/XfVgYoqL33DXD_eulBXHntujA38ZFfpz6ohN3Ou2lS4Tef8RuSgebM45SrP6obOZPTWN", {
      method: "POST",
      body: JSON.stringify({
        content: "message"
      }),
    });
    console.log("no")
    await message.forward("ninjadodogo@gmail.com");
    console.log(JSON.stringify(["yes", message, "\n", "env", env, "\n", "ctx", ctx]))
  }
}