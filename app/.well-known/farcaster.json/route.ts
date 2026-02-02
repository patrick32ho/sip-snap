import { minikitConfig } from "../../../minikit.config";

export async function GET() {
  return new Response(JSON.stringify(minikitConfig), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
