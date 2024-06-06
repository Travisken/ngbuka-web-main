"use server";


export async function signIn(formData) {
  console.log(formData.get("name"));
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZkNGY5MWI2LTZjN2ItNDc3MS1iZWIwLTFjNzQzNDdmOGMwNyIsImVtYWlsIjoibWVjaGFuaWMxQGV4YW1wbGUuY29tIiwicm9sZSI6Im1lY2hhbmljIiwiaWF0IjoxNzE1NjkzMDMzLCJleHAiOjE3MTU3Nzk0MzN9.UZZlNv_qcNeedP3iTvRSC_7pEqckpplGqpG7JXU5D3M";

let Page = "1";
export async function searchData({ limit, query }) {
  // Perform server-side operations, like fetching data from a database
  if (query) {
    const response = await fetch(
      `https://74.48.46.59/api/v1/search/?limit=${limit}&page=1&searchQuery=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    return data;
  }
}

