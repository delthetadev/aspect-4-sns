// app/actions.ts
"use server";

export async function submitAsp(formData: FormData) {
  const x = formData.get("x");
  const y = formData.get("y");
  return {
    result: `入力値 X: ${x}, Y: ${y}`,
  };
}
