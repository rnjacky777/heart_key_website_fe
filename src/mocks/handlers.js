import { http, HttpResponse } from "msw";

// 定義 Mock API 處理程序
export const handlers = [
  http.post("/api/submit", async ({ request }) => {
    const data = await request.json();
    console.log("Mock Data Received:", data);

    return HttpResponse.json({
      message: "Mock survey submitted successfully",
      submittedData: data,
    });
  }),
];
