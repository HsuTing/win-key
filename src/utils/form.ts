const FORM_ID = "1FAIpQLSeCHXRpYTC4hatUyFJWsZl_klLDTXECcSkw7k7uME1-hyF-qg";
const FIELDS = {
  name: "entry.1933057890",
  company: "entry.639469539",
  email: "entry.1574557020",
  tel: "entry.1578762008",
  content: "entry.473236620",
} as Record<string, string>;

export async function sendForm(data: FormData): Promise<"done" | "error"> {
  const body = (Array.from(data.entries()) as Array<[string, string | number]>)
    .flatMap(
      ([name, value]) => `${FIELDS[name] ?? name}=${encodeURIComponent(value)}`,
    )
    .join("&");

  try {
    return await fetch(
      `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
      {
        method: "POST",
        mode: "no-cors",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body,
      },
    ).then((res) => "done");
  } catch (e) {
    console.error(e);
    return "error";
  }
}
