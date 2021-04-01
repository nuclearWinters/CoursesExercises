import axios from "axios";

const fetchData = async () => {
  const response = await axios({
    method: "GET",
    url: "https://develop.bewor.com/api/workingTime/more",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2ZWxvcC5iZXdvci5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2MDU1MDQ5NTYsImV4cCI6MTYwNTUwODU1NiwibmJmIjoxNjA1NTA0OTU2LCJqdGkiOiIybnIxS28wTmczdTJtYXkzIiwic3ViIjo4LCJwcnYiOiJiOTEyNzk5NzhmMTFhYTdiYzU2NzA0ODdmZmYwMWUyMjgyNTNmZTQ4In0.ave5RfkGuAnK_Ck4GjHfqQDQOR4C9BMnEhpOnlsI7Y4",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      date: "2020-10-19",
      user_id: 8,
      time_zone: "America/Mexico_City",
    }),
  });
  console.log(response.data);
};

fetchData();
