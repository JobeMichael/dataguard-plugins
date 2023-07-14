type ApiRequest = {
  url: string;
  body: any;
  method: "POST" | "PUT" | "GET" | "DELETE";
};

export const apiRequest = async ({ url, body, method }: ApiRequest) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
};
