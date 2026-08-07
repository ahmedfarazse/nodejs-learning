
if (req.method === "GET" && req.url === "/api/user") {
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify({
    name: "Ahmed",
    role: "Software Engineer"
  }));
}